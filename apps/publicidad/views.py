from django.conf import settings
from django.core.mail import  EmailMultiAlternatives

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Articulo
from .serializer import ArticuloSerializer


# Create your views here Publicidad.
class ArticuloListView(ListAPIView): 
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 

class ArticuloDetailView(RetrieveAPIView): 
    queryset= Articulo.objects.all()
    serializer_class= ArticuloSerializer 


# Envio de correo electronicos 
@api_view(['POST'])
def pqrs(request): 
    if request.method == 'POST': 
        data= []
        data = request.data
        sendEmail(data)
        return Response("Realizado")
    
    
def sendEmail(data): 
       
        asunto="PQR's: "+data.get('asunto') 
        email_to= data.get('email')
        email_from= settings.EMAIL_HOST_USER
        mensaje="MENSAJE: "+data.get('contenido')+". EMAIL USUARIO: "+email_to
            
        email= EmailMultiAlternatives(
            asunto,
            mensaje, 
            email_from,
            [email_to, email_from],
        )
        email.send()
        