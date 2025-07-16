import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import create_app
from app.database import db
from app.models import User

app = create_app()

with app.app_context():
    users = User.query.all()
    for user in users:
        print(f"""
ID: {user.id}
First Name: {user.first_name}
Surname: {user.surname}
Other Names: {user.other_names}
Email: {user.email}
PEN Number: {user.pen_number}
Role: {user.role}
Active: {user.is_active}
        """)
