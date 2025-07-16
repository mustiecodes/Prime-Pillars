from .user_dashboard import dashboard_bp
from .admin import admin_bp
from .auth import auth_bp

def register_routes(app):
    app.register_blueprint(dashboard_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(auth_bp)