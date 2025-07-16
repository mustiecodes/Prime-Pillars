from app.database import db

class Document(db.Model):
    __tablename__ = 'documents'

    id = db.Column(db.Integer, primary_key=True)
    application_id = db.Column(db.Integer, db.ForeignKey('applications.id'), nullable=False)

    doc_type = db.Column(db.String(50))  # e.g. 'account_opening', 'nin_slip', etc.
    title = db.Column(db.String(150))    # Display name
    url = db.Column(db.String(255))      # Path or S3 URL

    status = db.Column(db.String(20), default='pending')  # 'pending', 'accepted', 'rejected'
    rejection_comment = db.Column(db.String(255))
