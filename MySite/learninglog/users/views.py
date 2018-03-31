from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.conf import settings

from .forms import RegisterForm,EmailForm,ChangepwForm,ProfileForm,ForgetpwForm
from learnlogs.models import Topic,Entry
from .models import Contact

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
    """允许编辑的个人信息"""
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
            up.hobby=hobby
            if birth_date:
                up.birth_date=birth_date
            up.address=adress
            up.describe=describe
            uu.save()
            up.save()
    all_topic=Topic.objects.all().order_by('date_added')
    entries=Entry.objects.filter(owner=request.user).order_by('-date_added')[:7]
    context={'form':form,'entries':entries,'all_topic':all_topic}
    return render(request, 'users/profile.html',context)

@login_required
def author_profile(request,user_id):
    """Entry作者（author）的个人信息，提供关注功能"""
    form=ProfileForm()
    if request.method=='POST':
        user_from=request.user
        user_to=User.objects.filter(username=request.POST.get('contact')).first()
        if not Contact.objects.filter(user_from=user_from,user_to=user_to) and user_from!=user_to:
            Contact.objects.create(user_from=user_from,user_to=user_to)
        elif Contact.objects.filter(user_from=user_from,user_to=user_to):
            Contact.objects.get(user_from=user_from,user_to=user_to).delete()
    all_topic=Topic.objects.all().order_by('date_added')
    author=User.objects.get(pk=user_id)
    followers=len(author.followers.all())
    entries=Entry.objects.filter(owner=author).order_by('-date_added')[:7]
    context={'author':author,'form':form,'entries':entries,'followers':followers,'all_topic':all_topic}
    return render(request, 'users/author_profile.html',context)

def forgetpw(request):
    if request.method!='POST':
        form=ForgetpwForm()
    else:
        form=ForgetpwForm(request.POST)
        if form.is_valid():
            email=request.POST.get('email')
            password=request.POST.get('password1')
            user = User.objects.get(email = email)
            user.set_password(password)
            user.save()
            user = authenticate(username=user.username, password=password)
            if user is not None:
                login(request, user)
                return HttpResponseRedirect(reverse('learnlogs:index'))
    context={'form':form}
    return render(request,'users/forgetpw.html')

def forgetpwSendmail(request,email):
    print(email)