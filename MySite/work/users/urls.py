from django.urls import path
from django.contrib.auth.views import login

from . import views

app_name='users'
urlpatterns = [
    path('login',login,{'template_name':'users/login.html'},name='login'),          ##index导航页面
    path('logout',views.logout_view,name='logout'),        ##注销视图
    path('register',views.register,name='register'), #注册
    path('changepw',views.changepw,name='changepw'), #修改密码

    path('profile',views.profile,name='profile'), #用户个人信息
    path('author_profile/<int:user_id>',views.author_profile,name='author_profile'), #作者个人信息
 
    path('contactme',views.contactme,name='contactme'), #联系管理员
    path('sended',views.email_senddone,name='sended'),  #发送完毕

    path('forgetpw/',views.forgetpw,name='forgetpw'),
    path('get_email_code', views.forgetpwSendmail,name='get_email_code'),

]