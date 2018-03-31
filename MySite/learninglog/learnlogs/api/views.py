from django.shortcuts import get_object_or_404

from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from ..models import Entry
from .serializers import EntrySerializers

class EntryListView(generics.ListAPIView):
        queryset = Entry.objects.all()
        serializer_class = EntrySerializers

##认证
class CourseEnrollView(APIView):   ##在 HTTP 请求中的 Authorization 头里面的证书进行识别
    authentication_classes = (BasicAuthentication,) ##基础认证
"""
REST Framework 提供认证类去辨别用户执行的请求。如果认证成功，这个框架会在 request.user 中
设置认证的 User 对象。如果没有用户被认证，一个 Django 的 AnonymousUser 实例会被代替。
REST Framework 提供以下认证后台：
1、BasicAuthentication： HTTP 基础认证。用户和密码会被编译为 Base64 并被客户端设置在
Authorization HTTP 头中；
2、TokenAuthentication：基于 token 的认证。一个 Token 模型被用来存储用户 tokens。用来认证的
Authorization HTTP 头里面拥有包含 token 的用户；
3、SessionAuthentication：使用 Djnago 的会话后台（session backend）来认证。这个后台从你的网
站前端来执行认证 AJAX 请求给 API 是非常有用的
"""


class EntryEnrollView(APIView):
    authentication_classes = (BasicAuthentication,)
    permission_classes = (IsAuthenticated,)  #只允许通过认证的用户
    def post(self, request, pk, format=None):  #定义post方法
        entry = get_object_or_404(Entry, pk=pk)
        return Response({'get': True})  #返回响应
'''
REST Framework包含一个权限系统去限制视图的访问。一些 REST Framework的内置权限如下所示:
1、AllowAny：无限制的访问，无论当前用户是否通过认证；
2、IsAuthenticated：只允许通过认证的用户；
3、IsAuthenticatedOrReadOnly：通过认证的用户拥有完整的权限。陌生用户只允许去还行可读的方
法，例如 GET, HEAD 或者 OPETIONS；
4、DjangoModelPermissions：权限与 django.contrib.auth 进行了捆绑。视图需要一个 queryset 属性。
只有分配了模型权限的并经过认证的用户才能获得权限；
5、DjangoObjectPermissions：基于每个对象基础上的 Django 权限。
如果用户没有权限，他们通常会获得以下某个 HTTP 错误：
HTTP 401：无认证；HTTP 403：没有权限。
'''