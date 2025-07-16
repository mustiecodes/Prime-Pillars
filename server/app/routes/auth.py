from flask import Blueprint, request, jsonify, session
from app.models import User
from app.database import db
from werkzeug.security import generate_password_hash, check_password_hash

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json()

    first_name = data.get('first_name', '').strip()
    surname = data.get('surname', '').strip()
    other_names = data.get('other_names', '').strip()
    email = data.get('email', '').strip()
    pen_number = data.get('pen_number', '').strip()
    password = data.get('password', '').strip()

    if not all([first_name, surname, email, pen_number, password]):
        return jsonify({'error': 'All fields except Other Names are required'}), 400

    if User.query.filter((User.pen_number == pen_number) | (User.email == email)).first():
        return jsonify({'error': 'User already exists'}), 409

    new_user = User(
        role='client',
        pen_number=pen_number,
        first_name=first_name,
        surname=surname,
        other_names=other_names,
        email=email,
        password_hash=generate_password_hash(password),
        is_active=True
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Registration successful'}), 201


@auth_bp.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    pen_number = data.get('pen_number', '').strip()
    password = data.get('password', '').strip()

    if not pen_number or not password:
        return jsonify({'error': 'PEN Number and password are required'}), 400

    user = User.query.filter_by(pen_number=pen_number).first()
    if not user or not check_password_hash(user.password_hash, password):
        return jsonify({'error': 'Invalid login credentials'}), 401

    if not user.is_active:
        return jsonify({'error': 'Account is inactive'}), 403

    session['user_id'] = user.id
    session['user_role'] = user.role

    return jsonify({'message': 'Login successful'}), 200


@auth_bp.route('/api/auth/me', methods=['GET'])
def get_current_user():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Not logged in'}), 401

    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    return jsonify({
        'id': user.id,
        'first_name': user.first_name,
        'surname': user.surname,
        'other_names': user.other_names,
        'pen_number': user.pen_number,
        'role': user.role,
        'email': user.email,
        'pfa': user.pfa,
        'rsa_balance': user.rsa_balance,
        'bvn': user.bvn,
        'nin': user.nin,
        'dob': user.dob,
        'phone_number': user.phone_number,
        'alt_phone': user.alt_phone,
        'alt_email': user.alt_email
    })
