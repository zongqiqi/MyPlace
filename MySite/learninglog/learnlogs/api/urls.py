from django.urls import path
from . import views

app_name='api'
urlpatterns = [
    path('entries/',views.EntryListView.as_view(),name='entry_list'),

]