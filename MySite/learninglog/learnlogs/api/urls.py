from django.urls import path
from . import views

app_name='api'
urlpatterns = [
    path('entries/',views.EntryListView.as_view(),name='entry_list'),
    path('courses/<int:pk>/enroll/',views.EntryEnrollView.as_view(),name='entry_enroll'),

]



#   http://127.0.0.1:8000/api/courses/146/enroll/