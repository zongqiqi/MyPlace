from django.urls import path

from . import views

app_name='lovestory'
urlpatterns=[
	# url(r'^$',views.index,name='index'),
	path('',views.user_login,name='test'),
	path('login',views.login,name='login'),

	path('test2/',views.test2,name='test2'),
	path('tour/',views.tour,name='tour'),

]