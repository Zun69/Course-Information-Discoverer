# Generated by Django 3.2.6 on 2021-09-29 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0036_alter_course_yearlyfees'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='yearlyFees',
            field=models.DecimalField(blank=True, decimal_places=2, default='0', max_digits=8),
        ),
    ]