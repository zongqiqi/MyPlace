from rest_framework import generics
from ..models import Entry
from .serializers import EntrySerializers

class EntryListView(generics.ListAPIView):
        queryset = Entry.objects.all()
        serializer_class = EntrySerializers