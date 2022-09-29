from django.contrib import admin
from django.urls import path, include

# from server import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users_groups.urls')),
]

# if settings.DEBUG:
#     import debug_toolbar
#     urlpatterns = [
#         path('__debug__/', include(debug_toolbar.urls)),
#     ] + urlpatterns
