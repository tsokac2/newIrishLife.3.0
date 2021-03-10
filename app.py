import os
from flask import (
    Flask, flash, render_template, redirect,
    request, session, url_for)
from forms import RegisterForm, LoginForm, AddTip
from flask_pymongo import PyMongo
import datetime
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash