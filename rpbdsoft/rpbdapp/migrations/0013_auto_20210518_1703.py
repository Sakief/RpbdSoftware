# Generated by Django 3.1.7 on 2021-05-18 11:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rpbdapp', '0012_remove_profile_weekly_holiday'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='entry_date',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='visit_date',
        ),
    ]