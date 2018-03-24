from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

class RegisterForm(forms.Form):
    username=forms.CharField(max_length=255, required=True)
    password =forms.CharField(widget=forms.PasswordInput, required=True)
    password1 =forms.CharField(widget=forms.PasswordInput, required=True)
    email=forms.EmailField(required=False)

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        password1 = self.cleaned_data.get('password1')
        email= self.cleaned_data.get('email')
        try:
            user=User.objects.get(username=username)
            raise forms.ValidationError("Username must be unique,sonmeone already register this name.")
        except:
            if  password!=password1:
                raise forms.ValidationError("Sorry, not the same password.")
            if username.isdigit():
                raise forms.ValidationError("Sorry, username can't all number")
            if len(password) <6:
                raise forms.ValidationError("Sorry, password must six charhter or more")
            user=User.objects.create_user(username=username,password=password,email=email)
        return self.cleaned_data
    def login(self, request):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        return user