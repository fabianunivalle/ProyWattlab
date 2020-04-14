from django.urls import path, include
from .views import ListUser, RegisterUser, LoginUser
from knox import views as knox_views

urlpatterns = [
    path('', include('knox.urls')),
    path('registerUser', RegisterUser.as_view()),
    path('listUser', ListUser.as_view()),
    path('login', LoginUser.as_view()),    
    path('logout', knox_views.LogoutView.as_view(), name='Knox_logout')
]

