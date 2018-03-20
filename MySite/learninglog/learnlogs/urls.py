"""learninglog URL Configuration
URL模式
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views

app_name='learnlogs'
urlpatterns = [
    path('',views.index,name='index'),                                      ##index导航页面
    path('topic/<int:topic_id>',views.topic,name='topic'),                  ##主题页面
    path('entry/<int:entry_id>',views.entry,name='entry'),                  ##条目页面
    path('new_entry/<int:topic_id>',views.new_entry,name='new_entry'),      ##新建条目页面
    path('edit_entry/<int:entry_id>',views.edit_entry,name='edit_entry'),      ##新建条目页面
    
    path('test',views.test,name='test'),                                    ##测试
]
