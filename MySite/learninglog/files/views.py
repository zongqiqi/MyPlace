import os
from pathlib import Path

from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.http import Http404
from django.urls import reverse
from django.contrib.auth.decorators import login_required

from django.conf import settings

def index(request):
    """登录页面，已登录转向本人文件夹"""
    args=''
    if request.user.is_authenticated:##已登录用户

        return HttpResponseRedirect('/files/'+request.user.username)
    context={'args':args}
    return render(request,"files/index.html",context)

@login_required
def detail(request,args):
    """个人文件夹页面"""
    selfpath=Path(settings.MEDIA_ROOT)/'files'/request.user.username
    if not selfpath.exists():
        selfpath.mkdir(parents=True)
    path=Path(settings.MEDIA_ROOT)/Path('files')/Path(args)
    if request.method != "POST":
        if path.exists():##已存在个人目录
            dirs=[ i for i in path.iterdir() if i.is_dir()] #文件夹
            files=[ i for i in path.iterdir() if i.is_file()] #文件夹
            print(dirs)
            context={'dirs':dirs,'files':files,'urlpath':'/files/'+args}
            return render(request,"files/detail.html",context)
        else:#不存在个人目录则返回错误
            #path.mkdir()
            raise Http404("您所访问的目录不存在")
            #pass
    else:
        files=[i for i in request.FILES.getlist('files')]
        for file in files:
            filename=file.name
            #file_path=path/Path(filename)
            file_path=os.path.join(settings.MEDIA_ROOT,'files',args,filename)
            print(file_path)
            with open(file_path, 'wb') as pic:
                for c in file.chunks():
                    pic.write(c)
        return HttpResponseRedirect('/files/'+args)

    context={'args':args}
    return render(request,"files/detail.html",context)

@login_required
def addir(request,args):
    """创建文件夹"""
    path=os.path.join(settings.MEDIA_ROOT,'files',request.user.username,args)
    #return HttpResponse(path)
    if not os.path.exists(path):
        os.makedirs(path)
    return HttpResponseRedirect('/files/'+request.user.username+'/'+args)