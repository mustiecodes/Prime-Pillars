from app.database import db

class AccountRecord(db.Model):
    __tablename__ = 'account_records'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    address = db.Column(db.String(150))
    account_number = db.Column(db.String(50), unique=True)
