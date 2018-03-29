from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core.mail import send_mail

from .models import Profile

class RegisterForm(forms.Form):
    """用户注册表单"""
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

class EmailForm(forms.Form):
    """ContactMe--表单"""
    name=forms.CharField(max_length=25)
    title=forms.CharField(max_length=240)
    emailto=forms.EmailField()
    content=forms.CharField(widget=forms.TextInput(attrs={'placeholder':'请输入内容（不能为空）','cols':'116','rows':'20'}),)

    def clean(self):
        name = self.cleaned_data.get('name')
        emailto=self.cleaned_data.get('emailto')
        title=self.cleaned_data.get('title')
        content=self.cleaned_data.get('content')
        if content=='':
            raise forms.ValidationError("内容不能为空！ ")
        return self.cleaned_data
    def sendmail(self):
        name = self.cleaned_data.get('name')
        emailto=self.cleaned_data.get('emailto')
        title=self.cleaned_data.get('title')
        content=self.cleaned_data.get('content')
        mail='zongqiqi0522@foxmail.com'
        content=name+':'+emailto+':'+content
        send_status = send_mail(title, content, mail,[mail])
        return send_status

class ChangepwForm(forms.Form):
    """修改密码表单，pw1原密码，pw2新密码，pw3新密码核对"""
    password1 =forms.CharField(widget=forms.PasswordInput, required=True)#老密码
    password2 =forms.CharField(widget=forms.PasswordInput, required=True)#新密码
    password3 =forms.CharField(widget=forms.PasswordInput, required=True)#核对新密码

    def clean(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')
        password3 = self.cleaned_data.get('password3')
        if not self.is_valid():
            raise forms.ValidationError("所有项都为必填项")
        elif self.cleaned_data['password2'] != self.cleaned_data['password3']:
            raise forms.ValidationError("两次输入的新密码不一样")
        return self.cleaned_data



class UserEditForm(forms.ModelForm):
    """User模型-用户信息填写表单"""
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')

class ProfileForm(forms.ModelForm):
    """Profile模型-用户信息填写表单"""
    class Meta:
        model=Profile
        fields=('birth_date','describe','gender','photo','address','phone')
    def clean(self):
        birth_date = self.cleaned_data.get('birth_date')
        if not self.is_valid():
            raise forms.ValidationError("生日格式不正确")
        # T=birth_date.split('-')
        # if len(T)!=3 or T[0] !=4:
        #     raise forms.ValidationError("生日格式不正确.")
        # if not T[0].isdigit() or not T[1].isdigit() or not T[2].isdigit():
        #     raise forms.ValidationError("生日格式不正确().")
        # if int(T[1])>12 or int(T[2])>31:
        #     raise forms.ValidationError("生日格式不正确.")
        return self.cleaned_data