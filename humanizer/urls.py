from django.urls import path
from . import views

urlpatterns = [
    path('', views.humanize_text, name='humanize_text'),
    path("contact/", views.contact, name="contact")
]
