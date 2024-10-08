# Generated by Django 4.2.5 on 2024-09-25 21:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('silant_backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='machine',
            name='client3',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='client3_machines', to=settings.AUTH_USER_MODEL, verbose_name='server'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='client1',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='client1_machines', to=settings.AUTH_USER_MODEL, verbose_name='admin'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='client2',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='client2_machines', to=settings.AUTH_USER_MODEL, verbose_name='manager'),
        ),
    ]
