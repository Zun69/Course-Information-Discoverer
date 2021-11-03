# Generated by Django 3.2.6 on 2021-08-24 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0010_alter_course_description'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='years',
            new_name='duration',
        ),
        migrations.RenameField(
            model_name='course',
            old_name='atar',
            new_name='requiredAtar',
        ),
        migrations.AddField(
            model_name='course',
            name='learningOutcomes',
            field=models.TextField(default='learning outcome'),
        ),
        migrations.AlterField(
            model_name='course',
            name='description',
            field=models.TextField(default='Is a computing course'),
        ),
    ]
