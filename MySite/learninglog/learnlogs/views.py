"""
Django,learnlogs的视图函数
"""
from django.shortcuts import render


def index(request):
    """学习笔记的主页"""
    return render(request,"learnlogs/index.html")

def test(request):
    return render(request,"learnlogs/test.html")