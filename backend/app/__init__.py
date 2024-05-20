from flask import Flask
from flask_cors import CORS
from .routes import configure_routes

def create_app():
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:3000"])
    configure_routes(app)
    return app