from rest_framework import serializers
from rest_framework.authtoken.models import  Token

from django.contrib.auth import authenticate
from django.db import transaction

from .models import Profile
from django.contrib.auth.models import User

#Profile
class ProfileSeralizer(serializers.ModelSerializer): 
    class Meta: 
        model= Profile
        fields =('identificacion', 'tipo_usuario')
        extra_kwargs = {'identificacion': {"write_only": True, 'required': True}}

#Usuarios
class UserSerializer(serializers.ModelSerializer):
    profile= ProfileSeralizer()
    
    class Meta: 
        model= User
        fields = ('id', 'username', 'first_name', 'last_name','email','password','profile')
        extra_kwargs = {'password': {"write_only": True, 'required': True}, 
                        'first_name': {"write_only": True, 'required': True}, 
                        'last_name': {"write_only": True, 'required': True},
                        'email': {"write_only": True, 'required': True}}
    
    @transaction.atomic
    def create(self, validated_data):
        profile_data= validated_data.pop('profile')
        user = User.objects.create_user(**validated_data)
        user.profile = Profile.objects.create(user=user, **profile_data)
        user.save()
        Token.objects.create(user=user)
        
        return user 
        
#Login user         
""" class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password= serializers.CharField()
    
    def validate(self, data): 
        user = authenticate(**data)
        if user is not None and user.is_active: 
           return user
        else: 
            raise serializers.ValidationError("Credendiales incorrectas o inactivo") """
        

    