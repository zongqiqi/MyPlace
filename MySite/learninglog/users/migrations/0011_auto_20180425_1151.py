# Generated by Django 2.0.3 on 2018-04-25 03:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_friends'),
    ]

    operations = [
        migrations.AddField(
            model_name='friends',
            name='heats',
            field=models.FloatField(blank=True, default=5.0, null=True),
        ),
        migrations.AlterField(
            model_name='friends',
            name='gender',
            field=models.CharField(blank=True, choices=[('FEMAIL', '女'), ('MAIL', '男')], max_length=10, null=True),
        ),
    ]
