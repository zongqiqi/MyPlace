from django.urls import path
from django.contrib.auth.views import login

from . import views

app_name='users'
urlpatterns = [
    path('login',login,{'template_name':'users/login.html'},name='login'),                                      ##index导航页面

]