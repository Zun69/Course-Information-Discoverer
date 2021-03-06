# Generated by Django 3.2.6 on 2021-10-20 10:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0044_alter_course_state'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='state',
            field=models.CharField(choices=[('NSW', 'New South Wales'), ('NT', 'Northern Territory'), ('QLD', 'Queensland'), ('SA', 'South Australia'), ('Tasmania', 'Tasmania'), ('VIC', 'Victoria'), ('WA', 'Western Australia'), ('ACT', 'Australian Capital Territory')], default='VIC', max_length=30),
        ),
    ]
