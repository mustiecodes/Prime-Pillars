from app.database import db

class PFA(db.Model):
    __tablename__ = 'pfas'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
