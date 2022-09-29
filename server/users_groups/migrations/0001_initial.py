# Generated by Django 3.2.15 on 2022-09-28 11:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Назва групи')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Опис групи')),
            ],
            options={
                'verbose_name': 'Група',
                'verbose_name_plural': 'Групи',
                'ordering': ['pk'],
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, unique=True, verbose_name="Ім'я користувача")),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Дата створення')),
                ('groups', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='users', to='users_groups.group')),
            ],
            options={
                'verbose_name': 'Користувач',
                'verbose_name_plural': 'Користувачі',
                'ordering': ['pk'],
            },
        ),
    ]
