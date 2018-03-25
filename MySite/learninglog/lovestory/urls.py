from django.urls import path

from . import views

app_name='lovestory'
urlpatterns=[
	path('',views.index,name='index'),
    path('login/',views.user_login,name='login'),

	path('test2/',views.test2,name='test2'),
	path('tour/',views.tour,name='tour'),

]