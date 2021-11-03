# Generated by Django 3.2.6 on 2021-08-24 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0011_auto_20210824_0558'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='requiredAtar',
            new_name='atar',
        ),
        migrations.RenameField(
            model_name='course',
            old_name='duration',
            new_name='years',
        ),
        migrations.RemoveField(
            model_name='course',
            name='learningOutcomes',
        ),
        migrations.AlterField(
            model_name='course',
            name='description',
            field=models.CharField(default='Is a computing course', max_length=500),
        ),
    ]
