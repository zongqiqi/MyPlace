# Generated by Django 2.0.3 on 2018-03-30 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_contact'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='photo',
            field=models.ImageField(blank=True, default='pic/default.png', upload_to='users/%Y/%m/%d'),
        ),
    ]