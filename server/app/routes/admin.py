from flask import Blueprint, jsonify, request
from app.database import db
from app.models import User, PFA, Application, Document
from werkzeug.security import generate_password_hash
from sqlalchemy.exc import IntegrityError
from sqlalchemy import func

admin_bp = Blueprint('admin', __name__)

# -------------------- STAFF MANAGEMENT -------------------- #

# 🚀 Get all staff/admin users
@admin_bp.route('/api/admin/staff', methods=['GET'])
def get_staff():
    staff_users = User.query.filter(User.role.in_(['staff', 'admin'])).all()
    return jsonify([
        {
            'id': u.id,
            'first_name': u.first_name,
            'surname': u.surname,
            'email': u.email,
            'role': u.role,
            'is_active': u.is_active
        } for u in staff_users
    ])

# 🧑‍💻 Create a new staff/admin user
@admin_bp.route('/api/admin/staff', methods=['POST'])
def create_staff():
    data = request.get_json()
    required_fields = ['first_name', 'surname', 'email', 'password']
    for field in required_fields:
        if not data.get(field):
            return jsonify({'error': f'{field.replace("_", " ").title()} is required'}), 400

    try:
        new_user = User(
            first_name=data['first_name'].strip(),
            surname=data['surname'].strip(),
            email=data['email'].strip().lower(),
            password_hash=generate_password_hash(data['password']),
            role=data.get('role', 'staff'),
            is_active=True
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User created'}), 201

    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'Email already exists'}), 400

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# 🔄 Toggle staff active/inactive
@admin_bp.route('/api/admin/staff/<int:user_id>/toggle', methods=['POST'])
def toggle_staff_status(user_id):
    user = User.query.get_or_404(user_id)
    if user.role not in ['staff', 'admin']:
        return jsonify({'error': 'Invalid user role'}), 400

    user.is_active = not user.is_active
    db.session.commit()
    return jsonify({'message': 'Status toggled', 'new_status': user.is_active})


# -------------------- PFA MANAGEMENT -------------------- #

# 📥 List all PFAs
@admin_bp.route('/api/admin/pfa', methods=['GET'])
def list_pfas():
    pfas = PFA.query.order_by(PFA.name).all()
    return jsonify([{'name': p.name} for p in pfas])

# ➕ Add new PFA
@admin_bp.route('/api/admin/pfa', methods=['POST'])
def add_pfa():
    data = request.get_json()
    name = data.get('name', '').strip()

    if not name:
        return jsonify({'error': 'PFA name is required'}), 400

    exists = PFA.query.filter(func.lower(PFA.name) == name.lower()).first()
    if exists:
        return jsonify({'error': 'PFA already exists'}), 400

    new_pfa = PFA(name=name)
    db.session.add(new_pfa)
    db.session.commit()

    return jsonify({'message': 'PFA added successfully'}), 201

# ❌ Delete a PFA
@admin_bp.route('/api/admin/pfa/<string:name>', methods=['DELETE'])
def remove_pfa(name):
    pfa = PFA.query.filter(func.lower(PFA.name) == name.lower()).first()
    if not pfa:
        return jsonify({'error': 'PFA not found'}), 404

    db.session.delete(pfa)
    db.session.commit()
    return jsonify({'message': f'PFA "{name}" removed'})


# -------------------- DOCUMENT STATUS REVERSAL -------------------- #

# 📄 Get all documents for a user by PEN number
@admin_bp.route('/api/admin/documents/<pen_number>', methods=['GET'])
def get_documents_by_pen(pen_number):
    user = User.query.filter_by(pen_number=pen_number).first()
    if not user:
        return jsonify([]), 200  # Gracefully return empty list

    app = Application.query.filter_by(user_id=user.id).first()
    if not app:
        return jsonify([]), 200

    documents = Document.query.filter_by(application_id=app.id).all()

    return jsonify([
        {
            'id': doc.id,
            'title': doc.title,
            'status': doc.status
        } for doc in documents
    ])

# 🔄 Reverse accepted document status to pending
@admin_bp.route('/api/admin/documents/<int:doc_id>/reset', methods=['POST'])
def reset_document_status(doc_id):
    doc = Document.query.get_or_404(doc_id)

    if doc.status != 'accepted':
        return jsonify({'error': 'Only accepted documents can be reversed'}), 400

    doc.status = 'pending'
    doc.rejection_comment = None
    db.session.commit()

    return jsonify({'message': f'Document "{doc.title}" status reversed to pending'})
