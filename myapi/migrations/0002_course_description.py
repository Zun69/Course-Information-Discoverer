# Generated by Django 3.2.6 on 2021-08-21 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='description',
            field=models.CharField(default='Is a computing course', max_length=100),
        ),
    ]
