from django import template
register=template.Library()

from django.utils.html import format_html

from users.models import Contact
@register.simple_tag
def following(user,author):
    """
    已关注和未关注不同的label
    """
    if user==author:
        page_ele='<label for="file"  style="border-radius:50px;background-color: #f1e05a;padding: 10px;width: 50%">你最美了</label>'
    elif not Contact.objects.filter(user_from=user,user_to=author):
        page_ele='<label for="file" class=" btn btn-default" style="border-radius:50px;background-color: #f1e05a;padding: 10px;width: 50%">关注</label>'
    else:
        page_ele='<label  style="border-radius:50px;background-color: #f1e05a;padding: 10px;width: 50%">已关注</label>'
    return format_html(page_ele)
