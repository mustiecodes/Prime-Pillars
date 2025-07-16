import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import create_app
from app.database import db

app = create_app()

with app.app_context():
    db.drop_all()
    print("🗑️ All tables dropped. Database is now empty.")
