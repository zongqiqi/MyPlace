from django import template
from django.utils.safestring import mark_safe
register=template.Library()

from django.utils.html import format_html
@register.simple_tag
def circle_page(curr_page,loop_page):
    """
    在pagination部位只保留5页内容
    """
    offset=abs(curr_page-loop_page)
    if offset<3:
        if curr_page==loop_page:
            page_ele='<li class="active"><a href="?page=%s">%s <span class="sr-only">(current)</span></a></li>'%(loop_page,loop_page)
        else:
            page_ele='<li><a href="?page=%s">%s</a></li>'%(loop_page,loop_page)
        return format_html(page_ele)
    else:
        return ''

@register.filter
def markdown_filter(val):
    val=val[:300]+'...'
    return mark_safe(val)