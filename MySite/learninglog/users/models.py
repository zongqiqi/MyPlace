from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User

class Profile(models.Model):
    """个人信息"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)#系统用户
    birth_date = models.DateField(null=True, blank=True)#生日
    describe = models.TextField(max_length=500, blank=True)#个人介绍
    gender = models.CharField(max_length=5,blank=True,null=True)##性别
    hobby=models.CharField(max_length=200,blank=True)#爱好
    phone=models.CharField(max_length=20,blank=True,null=True)
    address=models.CharField(max_length=200,blank=True)#地址
    #图片字段，上传之/media/...
    photo = models.ImageField(upload_to='users/%Y/%m/%d', blank=True,default='default.png')#头像

#创建个更新用户实例，profile同步更新和创建
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


class Contact(models.Model):
    """为创建关注而建立的中介模型，多对多"""
    #一个 ForeignKey 指向创建关系的用户
    user_from=models.ForeignKey(User,related_name='rel_from_set',
                                    on_delete=models.SET_NULL,null=True,blank=True) 
    #一个 ForeignKey 指向被关注的用户
    user_to=models.ForeignKey(User,related_name='rel_to_set',
                                    on_delete=models.SET_NULL,null=True,blank=True) 
    created=models.DateTimeField(auto_now_add=True,db_index=True)
    class Meta:
        ordering=('-created',)
    def __str__(self):
        return '{} follows {}'.format(self.user_from,self.user_to)

# Add following field to User dynamically
User.add_to_class('following',#关注谁
                    models.ManyToManyField('self',
                                    through=Contact,
                                    related_name='followers', #被谁关注
                                    symmetrical=False))#非对称关注









class Friends(models.Model):
    """个人信息"""
    name=models.CharField(max_length=200)
    email=models.EmailField()
    birth_date = models.DateField(null=True, blank=True)#生日
    describe = models.TextField(max_length=500, blank=True)#个人介绍
    gender = models.CharField(max_length=5,blank=True,null=True)##性别
    hobby=models.CharField(max_length=200,blank=True)#爱好
    phone=models.CharField(max_length=20,blank=True,null=True)
    address=models.CharField(max_length=200,blank=True)#地址
    #图片字段，上传之/media/...
    photo = models.ImageField(upload_to='users/%Y/%m/%d', blank=True,default='default.png')#头像