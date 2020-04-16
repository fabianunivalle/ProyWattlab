from django.urls import path
from .views import  ArticuloListView,ArticuloDetailView, pqrs

urlpatterns = [
    path('articulo/', ArticuloListView.as_view()),
    path('articulo/<pk>', ArticuloDetailView.as_view()),
    path('pqrs/',pqrs),
    
]

