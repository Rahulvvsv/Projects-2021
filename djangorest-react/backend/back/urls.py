
from django.urls import path

from . import views

urlpatterns = [

    path('',views.getRoutes,name="getr"),
    path("notes/",views.getNotes,name="getapi"),
    path("notes/<str:pk>",views.getNotespecific,name="getapis")
]