from pathlib import Path

from django import template
from django.conf import settings

register=template.Library()

@register.filter
def filesname(value):
    return value.name

@register.filter
def filespath(value):
    """vaule:file:///E:/zongqiqi/biandaima/MyPlace/MySite/learninglog/media/files/Zongqiqi/test1"""
    length=len(settings.MEDIA_ROOT)+8+6
    return value.as_uri()[length:]