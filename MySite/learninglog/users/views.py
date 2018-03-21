from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm

from django.contrib.auth.models import User


def logout_view(request):
    """注销视图"""
    logout(request)
    return HttpResponseRedirect(reverse('learnlogs:index'))

def register(request):
    """注册页面"""
    if request.method == "POST":
        name=request.POST['username']
        password=request.POST['password']
        if password == request.POST['password1']:
            user=User(username=name,password=password)
            user.save()
            login(request,user)
            return HttpResponseRedirect(reverse('learnlogs:index'))
    return render(request, 'users/register.html')