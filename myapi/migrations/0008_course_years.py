# Generated by Django 3.2.6 on 2021-08-21 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0007_remove_course_years'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='years',
            field=models.DecimalField(decimal_places=2, default='3', max_digits=4),
        ),
    ]
