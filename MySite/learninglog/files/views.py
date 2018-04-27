import os
from pathlib import Path

from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import Http404
from django.urls import reverse
from django.contrib.auth.decorators import login_required

from django.conf import settings
# Create your views here.

def index(request):
    """登录页面，已登录转向本人文件夹"""
    args=''
    if request.user.is_authenticated:##已登录用户

        return HttpResponseRedirect('/files/'+request.user.username)
    context={'args':path}
    return render(request,"files/index.html",context)

@login_required
def detail(request,args):
    """个人文件夹页面"""
    if request.method != "POST":
        path=Path(settings.MEDIA_ROOT)/'files'/args
        if path.exists():##已存在个人目录
            dirs=[ i for i in path.iterdir() if i.is_dir()] #文件夹
            files=[ i for i in path.iterdir() if i.is_file()] #文件夹
            context={'dirs':dirs,'files':files}
            return render(request,"files/detail.html",context)
        else:#不存在个人目录则返回错误
            #path.mkdir()
            #raise Http404("您所访问的目录不存在")
            pass
            

    context={'args':args}
    return render(request,"files/detail.html",context)