from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
GENDER_CHOICES = (('M', 'Male'),('F', 'Female'),)
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = models.DateField(null=True, blank=True)
    describe = models.TextField(max_length=500, blank=True)
    gender = models.CharField(max_length=2, choices=GENDER_CHOICES)

#创建个更新用户实例，profile同步更新和创建
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()