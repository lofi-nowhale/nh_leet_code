from django.http import JsonResponse
from .models import Drink
from .serializers import DrinkSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def drink_list(request):
    #get all the drinks
    #serialize the list of drinks
    #return json
    if request.method == 'GET':
        drinks = Drink.objects.all()
        serializer = DrinkSerializer(drinks, many=True) # many=True will serialize all of the items in the list
        return JsonResponse({"drinks": serializer.data})

    if request.method == 'POST':
        serializer = DrinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save
            return Response(serializer.date, status=status.HTTP_201_CREATED)
