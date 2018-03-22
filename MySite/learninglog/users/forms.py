from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

class RegisterForm(forms.Form):
    username=forms.CharField(max_length=255, required=True)
    password =forms.CharField(widget=forms.PasswordInput, required=True)
    password1 =forms.CharField(widget=forms.PasswordInput, required=True)

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        password1 = self.cleaned_data.get('password1')
        try:
            user=User.objects.create_user(username=username, password=password,is_active=True)
            user.save()
        except:
            raise forms.ValidationError("username must be unique,sonmeone already register this name.")
        user = authenticate(username=username, password=password)
        if not user or not user.is_active or password!=password1:
            raise forms.ValidationError("Sorry, that register was invalid. Please try again.")
        if username.isdigit():
            raise forms.ValidationError("Sorry, username can't all number")
        if len(username) < 6 or len(password) <6:
            raise forms.ValidationError("Sorry, username or password must six charhter or more")
        return self.cleaned_data
    def login(self, request):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        return user