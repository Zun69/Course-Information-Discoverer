# Generated by Django 3.2.6 on 2021-08-21 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0008_course_years'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='creditPoints',
            field=models.DecimalField(decimal_places=2, default='300', max_digits=5),
        ),
    ]
