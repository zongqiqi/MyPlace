"""learninglog URL Configuration

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
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings


admin.autodiscover()  #若应用有admin.py，使用app的admin

urlpatterns = [
    path('admin/', admin.site.urls),  #后台
    path('learnlogs/',include('learnlogs.urls')),   #学习日志
    path('users/',include('users.urls')),   #用户
    path('love/',include('lovestory.urls')),   #个人

    path('comments/',include('django_comments.urls')),   #评论

    path('api/',include('learnlogs.api.urls')),  #restful api

    path('ckeditor/', include('ckeditor_uploader.urls')),   #富文本

] 

#在开发环境中对多媒体文件的服务
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)