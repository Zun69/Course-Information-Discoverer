# Generated by Django 3.2.6 on 2021-10-21 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0050_alter_course_guaranteedatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='guaranteedAtar',
            field=models.TextField(blank=True),
        ),
    ]
