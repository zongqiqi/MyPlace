from django import forms

from .models import Topic

# class TopicForm(forms.ModelForm):
#     """创建新建Topic话题的表单"""
#     class Meta:
#         model=Topic
#         fields=['text']
#         labels={'text':''}
class NewTopicForm(forms.Form):
    name=forms.CharField(widget=forms.TextInput(attrs={'style': 'background-color: #1c1c1c;color: white','placeholder':'请输入新主题'}))