from django.urls import path, include
from django.contrib.auth import  views as auth_views 
from .views import  UserView, LoginUserView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user', UserView)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginUserView.as_view()),
    path('password-reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    path('password-reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('password-reset-confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm')
]

