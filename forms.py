import os
from flask import Flask, request, session
from flask_wtf import FlaskForm
from wtforms import(
    StringField, PasswordField, SubmitField,
    TextAreaField, SelectField)
from wtforms.validators import (
    DataRequired, Length, Regexp,
    Email, EqualTo, ValidationError)
from flask_pymongo import PyMongo
if os.path.exists("env.py"):
    import env