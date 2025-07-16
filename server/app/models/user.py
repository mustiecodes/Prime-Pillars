from app.database import db
from datetime import datetime

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    role = db.Column(db.String(20), nullable=False)  # 'client', 'staff', 'admin'
    first_name = db.Column(db.String(100))
    surname = db.Column(db.String(100))
    other_names = db.Column(db.String(100))
    email = db.Column(db.String(120), unique=True)
    alt_email = db.Column(db.String(120))
    pen_number = db.Column(db.String(50), unique=True)
    password_hash = db.Column(db.String(128))
    phone_number = db.Column(db.String(20))
    alt_phone = db.Column(db.String(20))
    pfa = db.Column(db.String(100))
    rsa_balance = db.Column(db.Float)
    bvn = db.Column(db.String(20))
    nin = db.Column(db.String(20))
    dob = db.Column(db.Date)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    applications = db.relationship('Application', backref='user', lazy=True)
