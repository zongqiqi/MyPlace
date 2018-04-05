from datetime import datetime,date
import os

from django.db import models
from django.conf import settings

from .thumbnil import image_size_off
# Create your models here.
class Pic(models.Model):
    photo = models.ImageField(upload_to='love',)#原图
    thumbanils= models.ImageField(upload_to='love/thumbanils', blank=True)#缩略图
    words=models.CharField(max_length=70,blank=True,default='X & Y')
    def save(self):
        super(Pic, self).save()
        image_size_off(self.photo.path,settings.MEDIA_ROOT)
        self.thumbanils="love/thumbanils/"+os.path.basename(self.photo.path)
        super(Pic, self).save()