from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext
from app.serializers import DestinationSerializer
from app.models import Destination
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
def index(request):
	return render_to_response('index.html',RequestContext(request))
def search(request):
	return render_to_response('search.html',RequestContext(request))
@api_view(['GET','POST'])
def destination_api(request):
    """
    List all tasks, or create a new task.
    """
    if request.method == 'GET':
        destination = Destination.objects.all()
        serializer = DestinationSerializer(destination, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DestinationSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST)