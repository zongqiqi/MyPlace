from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .forms import RegisterForm,EmailForm


def logout_view(request):
    """注销视图"""
    logout(request)
    return HttpResponseRedirect(reverse('learnlogs:index'))

def register(request):
    """注册页面"""
    form = RegisterForm(request.POST or None)
    if request.POST and form.is_valid():
        user = form.login(request)
        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('learnlogs:index'))# Redirect to a success page.
    return render(request, 'users/register.html', {'form': form })

def contactme(request):
    if request.method != "POST":
        form=EmailForm()
    else:
        form=EmailForm(data=request.POST)
        if form.is_valid():
            if form.sendmail():
                return HttpResponseRedirect(reverse('users:sended'))
    return render(request, 'users/contactme.html', {'form': form })

def email_senddone(request):
    return render(request, 'users/send_done.html')