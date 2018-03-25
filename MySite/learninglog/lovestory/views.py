from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect,Http404,HttpResponse
from django.contrib.auth import authenticate, login 
from .forms import LoginForm
from django.contrib.auth.decorators import login_required
import os


def index(request):
    if request.user.username =="":
        return HttpResponseRedirect(reverse('lovestory:login'))   ##重定向
    elif request.user.username =="Zongqiqi" or request.user.username =="Wangxiao":
        return render(request,'lovestory/index.html')
    else:
        return HttpResponseRedirect(reverse('learnlogs:index'))   ##重定向

def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(username=cd['username'],password=cd['password'])
            login(request, user)
            return HttpResponseRedirect(reverse('lovestory:index'))
    else:
        form = LoginForm()
    return render(request, 'lovestory/login.html', {'form': form})


def test2(request):
	return render(request,'lovestory/test2.html')

def tour(request):
	return render(request,'lovestory/BaiduMap.html')