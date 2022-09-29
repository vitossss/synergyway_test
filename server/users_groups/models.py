from django.db import models


class User(models.Model):
    username = models.CharField("Ім\'я користувача", max_length=50, unique=True)
    created = models.DateTimeField("Дата створення", auto_now_add=True)
    groups = models.ForeignKey('Group', on_delete=models.PROTECT, null=True, blank=True, related_name='users')

    class Meta:
        verbose_name = "Користувач"
        verbose_name_plural = "Користувачі"
        ordering = ['pk']

    def __str__(self):
        return f'{self.username}, {self.groups}'


class Group(models.Model):
    name = models.CharField("Назва групи", max_length=50)
    description = models.TextField("Опис групи", blank=True, null=True)

    class Meta:
        verbose_name = "Група"
        verbose_name_plural = "Групи"
        ordering = ['pk']

    def __str__(self):
        return f'{self.name}'
