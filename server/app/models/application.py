from app.database import db
from datetime import datetime

class Application(db.Model):
    __tablename__ = 'applications'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    status = db.Column(db.String(20), default='submitted')  # 'submitted', 'in_review', 'approved', 'rejected'
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)
    reviewed_at = db.Column(db.DateTime)
    approved_at = db.Column(db.DateTime)
    assigned_house = db.Column(db.String(100))

    documents = db.relationship('Document', backref='application', cascade="all, delete", lazy=True)
