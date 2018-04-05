from django.contrib import admin
from .models import Pic

class PICAdmin(admin.ModelAdmin):
    list_display = ['photo', 'words', 'thumbanils']
    fields = ['photo','words']
admin.site.register(Pic, PICAdmin)