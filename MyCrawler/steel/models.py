import os

from sqlalchemy import create_engine, Table, Column, Integer, String, MetaData, ForeignKey
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base#基类
from sqlalchemy import Column,Integer,String,DateTime

Base=declarative_base()

BASE_DIR=os.path.dirname(__file__)

class Steel(Base):
    __tablename__='Steel'
    id = Column(Integer, primary_key=True)
    time=Column(DateTime)
    pingming=Column(String(32))
    guige=Column(String(32))
    caizhi=Column(String(32))
    chandi=Column(String(32))
    jiage=Column(Integer)
    zhangtie=Column(Integer)
    beizhu=Column(String(32))
    def __repr__(self):
        return "<Steel(pingming='%s',guige='%s')>" % (self.pingming,self.guige)

def create_database(city='Nanjing'):
    engine=create_engine("sqlite:///%s/steel/%s_steel.db"%(BASE_DIR,city),echo=True)
    print(engine)
    Session=sessionmaker(bind=engine)
    metadata = MetaData()
    session=Session()
    # 创建数据表，如果数据表存在，则忽视
    metadata.create_all(engine)
    # 获取数据库连接
    Base.metadata.create_all(engine)
    
if __name__ == '__main__':
    create_database()