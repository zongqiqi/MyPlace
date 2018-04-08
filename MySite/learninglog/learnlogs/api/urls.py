from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

app_name='api'
urlpatterns = [
    path('entries/',views.EntryListView.as_view(),name='entry_list'),#所有的Entry
    path('courses/<int:pk>/enroll/',views.EntryEnrollView.as_view(),name='entry_enroll'),

    path('entry/<int:pk>/',views.EntryDetail2.as_view(),name='entry_detail'),#Entry详情
    path('entries2/',views.EntriesList2.as_view(),name='entriesList'),#Entry详情

]

#设置返回数据格式"http://127.0.0.1:8000/api/entries2.json"JSON 后缀
#"http://127.0.0.1:8000/api/entries2.api"浏览用的 API 后缀
urlpatterns = format_suffix_patterns(urlpatterns)