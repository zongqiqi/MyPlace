from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name='files'
urlpatterns = [
    path('',views.index,name='index'),   #导航页面
    path('add/<path:args>',views.addir,name='addir'),# 添加文件夹

    path('<path:args>',views.detail,name='detail'),  #个人文件夹

    ]