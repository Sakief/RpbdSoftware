# Generated by Django 3.1.7 on 2021-09-12 06:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rpbdapp', '0019_retail'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='division_code',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='rpbdapp.division'),
        ),
    ]
