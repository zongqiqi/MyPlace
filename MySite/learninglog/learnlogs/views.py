"""
Django,learnlogs的视图函数
"""
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User

from .models import Topic,Entry
from .forms import NewTopicForm


def index(request):
    """学习笔记的主页，包含新主题提交form"""
    if request.method != "POST":
        form=NewTopicForm()
    else:
        form=NewTopicForm(request.POST)
        if form.is_valid():
            data=form.cleaned_data  #cleaned_data类型是字典，里面是提交成功后的信息
            name=data['name']
            u=User.objects.all()[0]
            new_topic=Topic(owner=u,text=name)
            new_topic.save()
            return HttpResponseRedirect(reverse('learnlogs:index'))
    topics=Topic.objects.order_by('date_added')
    context={'topics':topics,'form':form}
    return render(request,"learnlogs/index.html",context)

def topic(request,topic_id):
    """特定主题页面"""
    topic=Topic.objects.get(id=topic_id)
    entries=topic.entry_set.all()
    topics=Topic.objects.order_by('date_added')
    context={'entries':entries,'topics':topics,'topic':topic}
    return render(request,"learnlogs/topic.html",context)



def test(request):
    if request.method != "POST":
        form=NewTopicForm()
    else:
        form=NewTopicForm(request.POST)
        context={'form':form}
    return render(request,"learnlogs/test.html",context)


