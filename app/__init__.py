from flask import Flask, render_template,flash, g, session, redirect, url_for
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy import create_engine
app = Flask(__name__)
app.config.from_object('config')
Session = sessionmaker()
engine = create_engine('mysql+mysqldb://root:Iltzm1013@localhost/liceo')
Session.configure(bind=engine)

sess = Session()
Base = declarative_base()
from app.auth_module.controllers import  mod_auth as auth_module
app.register_blueprint(auth_module)

@app.route('/')
def welcome():
	return render_template("welcome.html")

@app.route('/main/admin/')
def mainAdmin():
	if 'user_id' in session:
		return render_template('main-admin.html')
	return redirect(url_for('welcome'))

@app.route('/main/teacher/')
def mainTeacher():
	if 'user_id' in session:
		return render_template('main-teacher.html')
	return redirect(url_for('welcome'))
@app.route('/main/student(')
def mainStudent():
	if 'user_id' in session:
		return render_template('main-student.html')
	return redirect(url_for('welcome'))