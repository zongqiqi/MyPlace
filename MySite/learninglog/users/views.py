from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.conf import settings

from .forms import RegisterForm,EmailForm,ChangepwForm,ProfileForm
from learnlogs.models import Topic,Entry

def logout_view(request):
    """注销视图"""
    logout(request)
    return HttpResponseRedirect(reverse('learnlogs:index'))

def register(request):
    """注册页面"""
    form = RegisterForm(request.POST or None)
    if request.POST and form.is_valid():
        user = form.login(request)
        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('learnlogs:index'))# Redirect to a success page.
    return render(request, 'users/register.html', {'form': form })

def contactme(request):
    if request.method != "POST":
        form=EmailForm()
    else:
        form=EmailForm(data=request.POST)
        if form.is_valid():
            if form.sendmail():
                return HttpResponseRedirect(reverse('users:sended'))
    return render(request, 'users/contactme.html', {'form': form })

def email_senddone(request):
    message='这个大神发送了一个超级好建议给了管理员'
    context={'message':message}
    return render(request, 'users/send_done.html',context)

@login_required
def changepw(request):
    if request.method != 'POST':
        form=ChangepwForm()
    else:
        form=ChangepwForm(request.POST)
        if form.is_valid():
            username = request.user.username
            oldpassword = request.POST.get('password1')
            user = authenticate(username=username, password=oldpassword)
            if user is not None and user.is_active:
                newpassword = request.POST.get('password2')
                user.set_password(newpassword)
                user.save()
                message='密码修改成功'
                context={'message':message}
                return render(request, 'users/send_done.html',context)
        message='密码修改失败，请重新修改。'
        context={'message':message}
        return render(request, 'users/send_done.html',context)
    context={'form':form}
    return render(request, 'users/changepw.html',context)

@login_required
def profile(request):
    if request.method!="POST":
        form=ProfileForm()
    else:
        form=ProfileForm(request.POST)
        if form.is_valid():
            username = request.POST.get('username')
            gender = request.POST.get('gender')
            phone = request.POST.get('phone')
            email = request.POST.get('email')
            birth_date = request.POST.get('birth_date')
            hobby=request.POST.get('hobby')
            adress = request.POST.get('adress')
            describe = request.POST.get('describe')
            uu=User.objects.filter(username=request.user.username)[0]
            uu.username=username
            uu.email=email
            up=User.objects.filter(username=request.user.username)[0].profile
            photo = request.FILES.get('photo','')
            if photo:
                photoname = '%s/pic/%s' % (settings.MEDIA_ROOT, photo.name)
                with open(photoname, 'wb') as pic:
                    for c in photo.chunks():
                        pic.write(c)
                up.photo=photoname
            up.gender=gender
            up.phone=phone
            up.birth_date=birth_date
            up.address=adress
            up.describe=describe
            uu.save()
            up.save()
    entries=Entry.objects.filter(owner=request.user).order_by('-date_added')[:5]
    print(entries)
    context={'form':form,'entries':entries}
    return render(request, 'users/profile.html',context)