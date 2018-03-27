from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from .models import Profile

class AccountInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural = 'profile'
class UserAdmin(BaseUserAdmin):
    inlines = (AccountInline, )
admin.site.unregister(User)
admin.site.register(User, UserAdmin)