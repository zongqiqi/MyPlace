# Generated by Django 2.0.3 on 2018-03-24 13:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('learnlogs', '0002_entry_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
