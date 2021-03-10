import os
import app as app_module
import unittest
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask import session
import datetime
if os.path.exists("env.py"):
    import env


app = app_module.app

app.config["TESTING"] = True
app.config["WTF_CSRF_ENABLED"] = False
app.config['MONGO_URI'] = os.environ.get("MONGO_URI")

mongo = PyMongo(app)
app_module.mongo = mongo


class AppTestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        with app.app_context():
            mongo.db.users.delete_many({})
            mongo.db.tips.delete_many({})


