from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name='files'
urlpatterns = [
    path('',views.index,name='index'),   #导航页面
    path('<path:args>',views.detail,name='detail'),  #个人文件夹
    ]