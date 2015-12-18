from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy import create_engine
Session = sessionmaker()
engine = create_engine('mysql+mysqldb://root:Iltzm1013@localhost/liceo')
Session.configure(bind=engine)

sess = Session()
Base = declarative_base()