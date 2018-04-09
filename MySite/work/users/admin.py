from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from .models import Profile,Contact


##注册到User，User、Profile合并
# class AccountInline(admin.StackedInline):
#     model = Profile
#     can_delete = False
#     verbose_name_plural = 'profile'
# class UserAdmin(BaseUserAdmin):
#     inlines = (AccountInline, )
# admin.site.unregister(User)
# admin.site.register(User, UserAdmin)

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'birth_date', 'photo']
admin.site.register(Profile, ProfileAdmin)

class ContactAdmin(admin.ModelAdmin):
    list_display = ['user_from', 'user_to', 'created']
admin.site.register(Contact, ContactAdmin)