# Generated by Django 3.1.7 on 2021-05-17 09:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rpbdapp', '0008_auto_20210517_1517'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='outlet_type',
        ),
    ]