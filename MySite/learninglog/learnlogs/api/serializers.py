from rest_framework import serializers

from ..models import Entry,Topic

class EntrySerializers(serializers.ModelSerializer):
    class Meta:
        model=Entry
        fields=('id','owner','topic','name','text','date_added')

