from django.shortcuts import render

# Create your views here.


def index(request,args):
    """"""
    # args=request.GET.get('root')
    context={'args':args}
    return render(request,"files/index.html",context)