
from django.urls import path

from . import views

urlpatterns = [

    path('',views.getRoutes,name="getr"),
    path("notes/",views.getNotes,name="getapi"),
    path("notes/<str:pk>/update",views.updateNote,name="update-note"),
    path("notes/<str:pk>/delete",views.deleteNote,name="delete-note"),
    path("notes/<str:pk>",views.getNotespecific,name="getapis"),
    
    
]