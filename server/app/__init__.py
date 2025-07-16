from flask import Flask
from flask_cors import CORS
from app.database import db
from app.models import *  # Imports models
from app.routes import register_routes
import os

def create_app():
    app = Flask(__name__)

    # ✅ Required for using session cookies
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'super-secret-key')  # Use env var in production

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    CORS(app, supports_credentials=True)  # 👈 Needed for session cookies to work with frontend

    with app.app_context():
        db.create_all()
        register_routes(app)

    return app
