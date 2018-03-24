"""
Django,learnlogs的视图函数
"""
import markdown
import logging

from django.shortcuts import render,get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User
from django.db.models import Q
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator,EmptyPage,PageNotAnInteger

from .models import Topic,Entry
from .forms import NewTopicForm,NewEntryForm



def index(request):
    """学习笔记的主页，包含新主题提交form"""
    # print(request.user.username)
    # if request.method != "POST":
    #     form=NewTopicForm()
    # else:
    #     form=NewTopicForm(request.POST)
    #     if form.is_valid():         #表单验证
    #         data=form.cleaned_data  #cleaned_data类型是字典，里面是提交成功后的信息
    #         name=data['name']        #获取新topic的字段
    #         u=User.objects.all().first()   #确定添加主题的owner
    #         new_topic=Topic(owner=u,text=name)   #实例新topic
    #         new_topic.save()                     ##保存
    #         return HttpResponseRedirect(reverse('learnlogs:index'))   ##重定向
    # try:  ##如果用户已经登录，返回用户的entry
    #     all_topic=Topic.objects.filter(owner=request.user).order_by('date_added')
    # except TypeError:
    #     all_topic=Topic.objects.order_by('date_added')
    # entries=Entry.objects.order_by('-date_added')[:6]
    # context={'all_topic':all_topic,'form':form,'entries':entries}
    # return render(request,"learnlogs/index.html",context)
    entries=Entry.objects.order_by('-date_added')   ##条目查询集
    paginator=Paginator(entries,5,2) ##实例化结果集，每页5条，少于两条则合并到上一页
    page=request.GET.get('page')  #接收网页中的page值
    try:
        customer=paginator.page(page)
    except PageNotAnInteger:
        customer=paginator.page(1)
    except EmptyPage:
        customer=paginator.page(paginator.num_pages)

    if request.user.username =="":
        form=NewTopicForm()
        all_topic=Topic.objects.order_by('date_added')
        context={'all_topic':all_topic,'form':form,'entries':customer}
        return render(request,"learnlogs/index.html",context)
    else:
        if request.method != "POST":
            form=NewTopicForm()
        else:
            form=NewTopicForm(request.POST)
            if form.is_valid():         #表单验证
                data=form.cleaned_data  #cleaned_data类型是字典，里面是提交成功后的信息
                name=data['name']        #获取新topic的字段
                u=request.user   #确定添加主题的owner
                new_topic=Topic(owner=u,text=name)   #实例新topic
                new_topic.save()                     ##保存
                return HttpResponseRedirect(reverse('learnlogs:index'))   ##重定向
        all_topic=Topic.objects.filter(owner=request.user).order_by('date_added')
        print(request.user)
        context={'all_topic':all_topic,'form':form,'entries':customer}
        return render(request,"learnlogs/index.html",context)



def topic(request,topic_id):
    """特定主题页面"""
    topic=Topic.objects.get(id=topic_id)
    # topic=get_object_or_404(Topic,id=topic_id) ##必须登录
    entries=topic.entry_set.order_by('-date_added')
    paginator=Paginator(entries,5,2) ##实例化结果集，每页5条，少于两条则合并到上一页
    page=request.GET.get('page')  #接收网页中的page值
    try:
        customer=paginator.page(page)
    except PageNotAnInteger:
        customer=paginator.page(1)
    except EmptyPage:
        customer=paginator.page(paginator.num_pages)


    
    all_topic=Topic.objects.order_by('date_added')
    context={'entries':customer,'all_topic':all_topic,'topic':topic}
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

@login_required
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
            new_entry.owner=request.user
            new_entry.save()
            return HttpResponseRedirect(reverse('learnlogs:topic',args=[topic.id]))
    context={'topic':topic,'form':form,'all_topic':all_topic}
    return render(request,'learnlogs/new_entry.html',context)

@login_required
def edit_entry(request,entry_id):
    """对已有的条目进行编辑、修改"""
    entry=Entry.objects.get(id=entry_id)
    all_topic=Topic.objects.order_by('date_added')
    if entry.topic.owner==request.user:
        topic=entry.topic
        if request.method != 'POST':
            form = NewEntryForm(instance=entry)   #与新建条目的唯一差别
        else:
            form=NewEntryForm(instance=entry,data=request.POST)  ##绑定到数据模型，防止重复添加
            if form.is_valid():
                new_entry=form.save(commit=False)
                new_entry.topic=topic
                new_entry.save()
                return HttpResponseRedirect(reverse('learnlogs:entry',args=[entry_id]))
        context={'topic':topic,'form':form,'all_topic':all_topic,'entry':entry}
        return render(request,'learnlogs/edit_entry.html',context)
    else:
        return HttpResponseRedirect(reverse('learnlogs:index'))

def search(request):
    """搜索页面"""
    all_topic=Topic.objects.order_by('date_added')
    if request.method=='POST':
        form_data=request.POST['search']

        entries=Entry.objects.filter(Q(text__icontains=form_data) | Q(name__icontains=form_data)).order_by('-date_added')
    context={'entries':entries,'all_topic':all_topic,'search':form_data} 
    return render(request,'learnlogs/search.html',context)

#testttttttttttttttttttttttttttttttttttttttttttttttt
def test(request):

    return render(request,"learnlogs/test.html")