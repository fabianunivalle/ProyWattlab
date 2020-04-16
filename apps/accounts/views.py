
from rest_framework import status, generics
from rest_framework.response import Response
from knox.models import AuthToken

from django.contrib.auth.models import User

from .serializer import RegisterSerializer, UserSerializer, LoginSerializer

#Listar usuarios
class ListUser(generics.ListAPIView): 
    queryset = User.objects.all()
    serializer_class = UserSerializer  

#Registrar usuarios
class RegisterUser(generics.GenericAPIView): 
    
    def post(self, request): 
        serializer = RegisterSerializer(data=request.data)
        
        if serializer.is_valid(): 
            user= serializer.save() 
            token= AuthToken.objects.create(user)
            
            print(token[1])
            return Response({"user": UserSerializer(user).data}, status= status.HTTP_201_CREATED )
        else: 
            return Response("FALLA")
        
#Login usuarios        
class LoginUser(generics.GenericAPIView):
     serializer_class = LoginSerializer
     
     def post (self, request, *args, **kwargs):
        serializer= self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token= AuthToken.objects.create(user)
        return Response({
             "user": UserSerializer(user).data, 
             "token": token[1]
            }, status= status.HTTP_201_CREATED)

