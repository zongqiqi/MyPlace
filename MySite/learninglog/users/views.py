from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth import logout



def logout_view(request):
    """注销视图"""
    logout(request)
    return HttpResponseRedirect(reverse('learnlogs:index'))