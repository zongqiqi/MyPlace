from django.db import models
from django.contrib.auth.models import User

# class Topic(models.Model):
#     """用户学习的主题"""
#     owner=models.ForeignKey(User)
#     text=models.CharField(max_length=200)
#     date_added=models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         """返回模型的字符串表示"""
#         return self.text

# class Entry(models.Model):
#     """条目：学到关于某个主题的具体知识"""
#     topic=models.ForeignKey(Topic)
#     name=models.CharField(max_length=200,default="None")
#     text=models.TextField()
#     date_added=models.DateTimeField(auto_now_add=True)

#     class Meta:
#         verbose_name_plural='entries'

#     def __str__(self):
#         return self.text[0:50]+"..."

#----------------------------------------------
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
    topic=models.ForeignKey(Topic,on_delete=models.CASCADE)  #外键，指向主题类;级联删除，删除主表的数据时候从表中的数据也随着一起删除
    name=models.CharField(max_length=200)
    text=models.TextField()         #条目内容
    date_added=models.DateTimeField(auto_now_add=True)  #创建时间
    class Meta:
        verbose_name_plural='entries' #设置条目的复数形式
        db_table='learning_logs_entry'
    def __str__(self):
        """模型的字符串表示"""
        return self.text[:50] + "..."