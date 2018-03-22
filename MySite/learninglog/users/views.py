from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .forms import RegisterForm


def logout_view(request):
    """注销视图"""
    logout(request)
    return HttpResponseRedirect(reverse('learnlogs:index'))

def register(request):
    """注册页面"""
    # if request.method == "POST":
    #     name=request.POST['username'].strip()
    #     password=request.POST['password']
    #     if password == request.POST['password1']:
    #         user=User.objects.create_user(username=name, password=password,is_active=True)
    #         user.save()
    #         login(request,user)
    #         return HttpResponseRedirect(reverse('learnlogs:index'))
    # return render(request, 'users/register.html')

    form = RegisterForm(request.POST or None)
    if request.POST and form.is_valid():
        user = form.login(request)
        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('learnlogs:index'))# Redirect to a success page.
    return render(request, 'users/register.html', {'form': form })