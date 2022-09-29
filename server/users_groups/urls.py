from django.urls import path
from .views import *

urlpatterns = [
    path('users/', get_list_of_users),
    path('users/create/', user_create),
    path('users/<int:pk>/update/', user_update),
    path('users/<int:pk>/delete/', user_delete),
    path('groups/', get_list_of_groups),
    path('groups/create/', group_create),
    path('groups/<int:pk>/update/', group_update),
    path('groups/<int:pk>/delete/', group_delete),
]
