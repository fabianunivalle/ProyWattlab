from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth import authenticate
from knox.models import AuthToken

#Usuarios
class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model= User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')

#Registro de usuarios
class RegisterSerializer(serializers.Serializer): 
    id = serializers.ReadOnlyField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField() 
    
    def create (self, validate_data): 
        instance = User()
        instance.first_name= validate_data.get("first_name")
        instance.last_name= validate_data.get("last_name")
        instance.username= validate_data.get("username")
        instance.email = validate_data.get("email")
        instance.set_password(validate_data.get("password"))
        
        instance.save()
        
        return instance
    
    def validate_username(self, data):
        users = User.objects.filter(username = data)
        if len (users) != 0:
            raise serializers.ValidationError("Usuarion ya existente")
        else: 
            return data 
        
#Login user         
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password= serializers.CharField()
    
    def validate(self, data): 
        user = authenticate(**data)
        if user is not None and user.is_active: 
           return user
        else: 
            raise serializers.ValidationError("Credendiales incorrectas o inactivo")
        

    