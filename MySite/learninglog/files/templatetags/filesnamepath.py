import os
from pathlib import Path

from django import template
from django.conf import settings

register=template.Library()

@register.filter
def filesname(value):
    return value.name

@register.filter
def filespath(value):
    file=value.name
    path=value
    while path.name!='files':
        file=path.parent.name+'/'+file
        path=path.parent
    return file

@register.filter
def dirspath(value):
    file=value.name
    path=value
    n=len(Path(settings.MEDIA_ROOT).parts)
    return '/'+'/'.join((value.parts)[n:])

@register.filter
def parpath(value):
    #value=/files/Zongqiqi/1/1/1/1
    class url:
        pass
    l=[]
    target=value.split('/')
    base='/'.join(target[:2])
    for i in target[2:]:
        u=url()
        base+=('/'+i)
        u.name=i
        u.path=base
        l.append(u)
    return l