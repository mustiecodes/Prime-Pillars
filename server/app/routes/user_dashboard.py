from flask import Blueprint, jsonify, request, send_from_directory
from app.database import db
from app.models import Application, Document, User, AccountRecord
from datetime import datetime
from werkzeug.utils import secure_filename
from app.utils.email import send_email
import os
import pandas as pd

dashboard_bp = Blueprint('dashboard', __name__)

# Upload directory
UPLOAD_DIR = os.path.join(os.getcwd(), 'uploads')
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

# ---------------- CLIENT LIST ---------------- #
@dashboard_bp.route('/api/dashboard/clients', methods=['GET'])
def get_clients():
    users = db.session.query(User).join(Application).filter(Application.status != 'approved').all()
    result = []
    for user in users:
        app = user.applications[0] if user.applications else None
        if app:
            result.append({
                'pen_number': user.pen_number,
                'name': f"{user.first_name} {user.surname}",
                'status': app.status,
                'pfa': user.pfa
            })
    return jsonify(result)

# ---------------- CLIENT PROFILE ---------------- #
@dashboard_bp.route('/api/dashboard/client/<pen_number>', methods=['GET'])
def get_client_profile(pen_number):
    user = User.query.filter_by(pen_number=pen_number).first_or_404()
    app = user.applications[0] if user.applications else None
    if not app:
        return jsonify({'error': 'No application found'}), 404

    documents = [{
        'id': doc.id,
        'type': doc.doc_type,
        'title': doc.title,
        'url': doc.url,
        'status': doc.status,
        'rejection_comment': doc.rejection_comment
    } for doc in app.documents]

    return jsonify({
        'full_name': f"{user.first_name} {user.surname}",
        'pfa': user.pfa,
        'rsa_balance': user.rsa_balance,
        'email': user.email,
        'alt_email': user.alt_email,
        'application_id': app.id,
        'documents': documents
    })

# ---------------- DOCUMENT REVIEW ---------------- #
@dashboard_bp.route('/api/dashboard/document/<int:doc_id>/review', methods=['POST'])
def review_document(doc_id):
    data = request.get_json()
    status = data.get('status')
    comment = data.get('rejection_comment', '')

    if status not in ['accepted', 'rejected']:
        return jsonify({'error': 'Invalid status'}), 400

    doc = Document.query.get_or_404(doc_id)
    doc.status = status
    doc.rejection_comment = comment if status == 'rejected' else None
    db.session.commit()

    return jsonify({'message': 'Document reviewed'})

# ---------------- APPROVE APPLICATION ---------------- #
@dashboard_bp.route('/api/dashboard/application/<int:application_id>/submit', methods=['POST'])
def finalize_application_submission(application_id):
    app = Application.query.get_or_404(application_id)

    if any(doc.status != 'accepted' for doc in app.documents):
        return jsonify({'error': 'All documents must be accepted'}), 400

    app.status = 'approved'
    app.submitted_at = datetime.utcnow()
    db.session.commit()

    message = f"""
Dear {app.user.first_name},

Your application (ID: {application_id}) has been approved. ✅

Thank you for your submission.

Regards,
Housing Admin Team
    """
    recipients = [app.user.email, app.user.alt_email]
    send_email("✅ Application Approved", message, recipients)

    return jsonify({'message': 'Application approved and email sent to client.'})

# ---------------- SEND FEEDBACK ---------------- #
@dashboard_bp.route('/api/dashboard/application/<int:application_id>/feedback', methods=['POST'])
def send_feedback(application_id):
    app = Application.query.get_or_404(application_id)
    rejected_docs = [doc for doc in app.documents if doc.status == 'rejected']

    if not rejected_docs:
        return jsonify({'error': 'No rejected documents to send feedback'}), 400

    feedback_lines = [
        f"- {doc.title}: {doc.rejection_comment or 'No comment provided'}"
        for doc in rejected_docs
    ]
    feedback_content = "\n".join(feedback_lines)

    email_msg = f"""
Dear {app.user.first_name},

Thank you for your application (ID: {application_id}). Unfortunately, the following documents were rejected:

{feedback_content}

Please review and re-upload the necessary documents to continue the process.

Regards,
Housing Admin Team
    """

    recipients = [app.user.email, app.user.alt_email]
    send_email("📩 Application Feedback", email_msg, recipients)

    for doc in app.documents:
        db.session.delete(doc)
    db.session.delete(app)
    db.session.commit()

    return jsonify({'message': 'Feedback sent and application removed.', 'sent_to': recipients})

# ---------------- SERVE FILES ---------------- #
@dashboard_bp.route('/uploads/<path:filename>')
def serve_uploaded_file(filename):
    full_path = os.path.join(UPLOAD_DIR, filename)
    if not os.path.exists(full_path):
        print(f"[❌] File not found: {full_path}")
    return send_from_directory(UPLOAD_DIR, filename)

# ---------------- APPROVED APPLICATIONS ---------------- #
@dashboard_bp.route('/api/dashboard/approved', methods=['GET'])
def get_approved_applications():
    pfa = request.args.get('pfa')
    house = request.args.get('house')
    date = request.args.get('date')

    query = db.session.query(Application).join(User).filter(Application.status == 'approved')

    if pfa:
        query = query.filter(User.pfa == pfa)
    if house:
        query = query.filter(Application.assigned_house == house)
    if date:
        query = query.filter(db.cast(Application.submitted_at, db.String).like(f"{date}%"))

    results = []
    for app in query.all():
        account_docs = []
        process_docs = []

        for doc in app.documents:
            if doc.doc_type in ['account_opening', 'nin_slip']:
                account_docs.append(doc.url)
            else:
                process_docs.append(doc.url)

        results.append({
            'id': app.id,
            'name': f"{app.user.first_name} {app.user.surname}",
            'rsaBalance': app.user.rsa_balance,
            'pfa': app.user.pfa,
            'houseAllocated': app.assigned_house,
            'dateSubmitted': app.submitted_at.strftime('%Y-%m-%d'),
            'accountPack': account_docs,
            'processPack': process_docs,
        })

    return jsonify(results)

# ---------------- REPORT GENERATION ---------------- #
@dashboard_bp.route('/api/reports', methods=['POST'])
def generate_report():
    data = request.get_json()
    report_type = data.get('reportType')
    date_str = data.get('date')

    if not report_type or not date_str:
        return jsonify({'error': 'Missing report type or date'}), 400

    try:
        date = datetime.strptime(date_str, '%Y-%m-%d')
    except ValueError:
        return jsonify({'error': 'Invalid date format'}), 400

    query = db.session.query(Application).join(User).filter(
        db.func.date(Application.submitted_at) == date.date()
    )

    if report_type == 'offers':
        result = [{
            'name': f"{app.user.first_name} {app.user.surname}",
            'rsa_balance': app.user.rsa_balance,
            'offer': (
                'Eligible for 3-Bedroom' if app.user.rsa_balance >= 1_000_000 else
                'Eligible for 2-Bedroom' if app.user.rsa_balance >= 500_000 else
                'Not Eligible'
            )
        } for app in query.all()]
        filename = f"offers-{date_str}.json"

    elif report_type == 'approved':
        approved_apps = query.filter(Application.status == 'approved').all()
        result = [{
            'name': f"{app.user.first_name} {app.user.surname}",
            'pfa': app.user.pfa,
            'house': app.assigned_house,
            'submitted_at': app.submitted_at.strftime('%Y-%m-%d')
        } for app in approved_apps]
        filename = f"approved-{date_str}.json"

    else:
        return jsonify({'error': 'Invalid report type'}), 400

    report_path = os.path.join(UPLOAD_DIR, filename)
    with open(report_path, 'w') as f:
        import json
        json.dump(result, f, indent=2)

    return jsonify({
        'message': 'Report generated',
        'filename': filename,
        'download_url': f"/uploads/{filename}"
    })

# ---------------- CLIENT SUBMISSION ---------------- #
@dashboard_bp.route('/api/application/submit', methods=['POST'])
def create_application_submission():
    pen_number = request.form.get('pen_number')
    user = User.query.filter_by(pen_number=pen_number).first()
    if not user:
        return jsonify({'error': 'User not found'}), 404

    try:
        user.pfa = request.form.get('pfa')

        rsa_balance_raw = request.form.get('rsa_balance', '0').replace(',', '')
        user.rsa_balance = float(rsa_balance_raw or 0)

        user.bvn = request.form.get('bvn')
        user.nin = request.form.get('nin')

        dob = request.form.get('dob')
        if dob:
            user.dob = datetime.strptime(dob, '%Y-%m-%d')

        user.phone_number = request.form.get('phone_number')
        user.alt_phone = request.form.get('alt_phone')
        user.alt_email = request.form.get('alt_email')

        app = Application(user_id=user.id, submitted_at=datetime.utcnow())
        db.session.add(app)
        db.session.flush()

        documents = request.files.getlist('documents')
        for file in documents:
            filename = secure_filename(file.filename)
            if '.' not in filename:
                ext = file.content_type.split('/')[-1]
                filename += f".{ext}"

            file_path = os.path.join(UPLOAD_DIR, filename)
            file.save(file_path)

            title = filename.replace('optional:', '') if filename.startswith('optional:') else filename
            doc_type = 'optional' if filename.startswith('optional:') else title.lower().replace(' ', '_')

            db.session.add(Document(
                application_id=app.id,
                doc_type=doc_type,
                title=title,
                url=f"/uploads/{filename}",
                status='pending'
            ))

        db.session.commit()
        return jsonify({'message': 'Application submitted successfully', 'application_id': app.id})

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# ---------------- ACCOUNT RECORDS ---------------- #
@dashboard_bp.route('/api/dashboard/accounts', methods=['GET'])
def get_accounts():
    name = request.args.get('name', '').lower()
    address = request.args.get('address', '').lower()
    acct = request.args.get('account', '').lower()

    query = db.session.query(AccountRecord)
    results = [
        {
            'id': r.id,
            'name': r.name,
            'address': r.address,
            'account_number': r.account_number
        }
        for r in query.all()
        if name in r.name.lower() and address in r.address.lower() and acct in r.account_number.lower()
    ]
    return jsonify(results)

@dashboard_bp.route('/api/dashboard/accounts', methods=['POST'])
def upload_accounts_excel():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    df = pd.read_excel(file)

    added = 0
    skipped = 0
    for _, row in df.iterrows():
        name = str(row.get('Name', '')).strip()
        address = str(row.get('Address', '')).strip()
        acct = str(row.get('AccountNumber', '')).strip()

        if not acct or AccountRecord.query.filter_by(account_number=acct).first():
            skipped += 1
            continue

        db.session.add(AccountRecord(name=name, address=address, account_number=acct))
        added += 1

    db.session.commit()
    return jsonify({'message': f'{added} records added, {skipped} duplicates skipped.'})
