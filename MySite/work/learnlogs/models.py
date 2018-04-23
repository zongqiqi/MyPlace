from django.db import models
from django.contrib.auth.models import User
from ckeditor_uploader.fields import RichTextUploadingField

from sqlalchemy import create_engine, Table, Column, Integer, String, MetaData, ForeignKey
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base#基类
from sqlalchemy import Column,Integer,String,DateTime

class Topic(models.Model):
    """学习主题"""
    owner=models.ForeignKey(User,on_delete=models.CASCADE)
    text=models.CharField(max_length=200) ##学习主题的题目
    date_added=models.DateTimeField(auto_now_add=True)  ##添加的时间，自动添加

    def __str__(self):
        """返回模型的字符串表示"""
        return self.text
    class Meta:
        db_table = 'learning_logs_topic'

class Entry(models.Model):
    """学习主题下面的学习条目"""
    owner=models.ForeignKey(User,on_delete=models.CASCADE)
    topic=models.ForeignKey(Topic,on_delete=models.CASCADE)  #外键，指向主题类;级联删除，删除主表的数据时候从表中的数据也随着一起删除
    name=models.CharField(max_length=200)
    text=RichTextUploadingField()
    # text=RichTextField('  请输入内容（Markdown语法）')         #仅admin后台使用富文本编辑器
    date_added=models.DateTimeField(auto_now_add=True)  #创建时间
    class Meta:
        verbose_name_plural='entries' #设置条目的复数形式
        db_table='learning_logs_entry'
    def __str__(self):
        """模型的字符串表示"""
        return self.text[:50] + "..."





#---------------------------------------------------
class Data:
    '''方便为data绑定属性，D.a=[1,2,3]'''
    pass

Base=declarative_base()

class Steel(Base):
    '''ORM类'''
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