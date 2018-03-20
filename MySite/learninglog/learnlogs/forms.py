from django import forms

from .models import Topic,Entry

# class TopicForm(forms.ModelForm):
#     """创建新建Topic话题的表单"""
#     class Meta:
#         model=Topic
#         fields=['text']
#         labels={'text':''}
#         widgets = {'text': forms.Textarea(attrs={'cols': 80})}
class NewTopicForm(forms.Form):
    """在index页面添加新的Topic   （ps：stupid写法，NewEntryForm is wise）"""
    name=forms.CharField(widget=forms.TextInput(attrs={'style': 
        'background-color: #1c1c1c;color: white','placeholder':'请输入新主题'}),error_messages={'required': 'Please enter somethong'})

class NewEntryForm(forms.ModelForm):
    class Meta:
        model=Entry
        fields=['name','text']
        labels={'text':'','name':''}
        widgets={'name': forms.TextInput(attrs={'placeholder':'请输入标题','style':'border:1px solid #ddd',
                 'width':'100%','class':'form-control'}),
                 'text': forms.Textarea(attrs={'placeholder':'  请输入内容（Markdown语法）','cols':'116','rows':'20'})}