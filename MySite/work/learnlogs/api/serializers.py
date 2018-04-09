from rest_framework import serializers

from ..models import Entry,Topic

class EntrySerializers(serializers.ModelSerializer):
    class Meta:
        model=Entry
        fields=('id','owner','topic','name','text','date_added')

# #创建嵌套的序列化
# class TopicSerializer(serializers.ModelSerializer):
#     entires = EntrySerializers(many=True, read_only=True)
#     class Meta:
#         model=Topic
#         fields=('owner','text','date_added','entires')