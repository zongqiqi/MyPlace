from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)#系统用户
    birth_date = models.DateField(null=True, blank=True)#生日
    describe = models.TextField(max_length=500, blank=True)#个人介绍
    gender = models.CharField(max_length=5,blank=True,null=True)##性别
    hobby=models.CharField(max_length=200,blank=True)#爱好
    phone=models.CharField(max_length=20,blank=True,null=True)
    address=models.CharField(max_length=200,blank=True)#地址
    #图片字段，上传之/media/...
    photo = models.ImageField(upload_to='users/%Y/%m/%d', blank=True)#头像

#创建个更新用户实例，profile同步更新和创建
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()