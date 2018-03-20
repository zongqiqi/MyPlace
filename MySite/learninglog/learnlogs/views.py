"""
Django,learnlogs的视图函数
"""
import markdown

from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User

from .models import Topic,Entry
from .forms import NewTopicForm,NewEntryForm


def index(request):
    """学习笔记的主页，包含新主题提交form"""
    if request.method != "POST":
        form=NewTopicForm()
    else:
        form=NewTopicForm(request.POST)
        if form.is_valid():         #表单验证
            data=form.cleaned_data  #cleaned_data类型是字典，里面是提交成功后的信息
            name=data['name']        #获取新topic的字段
            u=User.objects.all().first()   #确定添加主题的owner
            new_topic=Topic(owner=u,text=name)   #实例新topic
            new_topic.save()                     ##保存
            return HttpResponseRedirect(reverse('learnlogs:index'))   ##重定向
    all_topic=Topic.objects.order_by('date_added')
    entries=Entry.objects.order_by('-date_added')[:6]
    context={'all_topic':all_topic,'form':form,'entries':entries}
    return render(request,"learnlogs/index.html",context)

def topic(request,topic_id):
    """特定主题页面"""
    topic=Topic.objects.get(id=topic_id)
    entries=topic.entry_set.order_by('-date_added')
    all_topic=Topic.objects.order_by('date_added')
    context={'entries':entries,'all_topic':all_topic,'topic':topic}
    return render(request,"learnlogs/topic.html",context)

def entry(request,entry_id):
    """特定条目页面"""
    entry=Entry.objects.get(id=entry_id)
    ##支持Markdown
    entry.text=markdown.markdown(entry.text,
                                  extensions=[
                                     'markdown.extensions.extra',
                                     'markdown.extensions.codehilite',
                                     'markdown.extensions.toc',
                                  ])
    all_topic=Topic.objects.order_by('date_added')
    context={'entry':entry,'all_topic':all_topic}
    return render(request,"learnlogs/entry.html",context)

def new_entry(request,topic_id):
    """新条目页面"""
    topic=Topic.objects.get(id=topic_id)
    all_topic=Topic.objects.order_by('date_added')
    if request.method != 'POST':
        form = NewEntryForm()
    else:
        form=NewEntryForm(data=request.POST)
        if form.is_valid():
            new_entry=form.save(commit=False)
            new_entry.topic=topic
            new_entry.save()
            return HttpResponseRedirect(reverse('learnlogs:topic',args=[topic.id]))
    context={'topic':topic,'form':form,'all_topic':all_topic}
    return render(request,'learnlogs/new_entry.html',context)

def edit_entry(request,entry_id):
    entry=Entry.objects.get(id=entry_id)
    topic=entry.topic
    all_topic=Topic.objects.order_by('date_added')
    if request.method != 'POST':
        form = NewEntryForm(instance=entry)   #与新建条目的唯一差别
    else:
        form=NewEntryForm(data=request.POST)
        if form.is_valid():
            new_entry=form.save(commit=False)
            new_entry.topic=topic
            new_entry.save()
            return HttpResponseRedirect(reverse('learnlogs:topic',args=[topic.id]))
    context={'topic':topic,'form':form,'all_topic':all_topic,'entry':entry}
    return render(request,'learnlogs/edit_entry.html',context)


#testttttttttttttttttttttttttttttttttttttttttttttttt
def test(request):

    return render(request,"learnlogs/test.html")