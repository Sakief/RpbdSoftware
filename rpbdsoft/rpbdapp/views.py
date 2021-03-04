from django.shortcuts import render
from django.http import HttpResponse,JsonResponse,Http404
from rest_framework.decorators import api_view,action
from rpbdapp.models import Division,District,Thana,MarketPoint,Zone
from rpbdapp.serializers import DivisionSerializer,DistrictSerializer,ThanaSerializer,MarketPointSerializer,ZoneSerializer
from rest_framework.response import Response
from rest_framework import filters
from rest_framework import generics,status
from rest_framework.views import APIView


class DivisionListView(APIView):
    
    def get(self,request,format=None):
        divisions = Division.objects.all()
        serializer = DivisionSerializer(divisions,many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def post(self,request,format=None):
        serializer = DivisionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        


class DisrtictListView(APIView):

    def get(self,request,format=None):
        districts = District.objects.all()
        serializer = DistrictSerializer(districts,many=True)
        response = serializer.data
        return Response(response,status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['POST'])
    def post(self,request,format=None):
        serializer = DistrictSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

class ThanaListView(APIView):

    def get(self,request,format=None):
        thanas = Thana.objects.all()
        serializer = ThanaSerializer(thanas,many=True)
        response = serializer.data
        return Response(response,status=status.HTTP_200_OK)
    @action(detail=True, methods=['POST'])
    def post(self,request,fromat=None):
        serializer = ThanaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class ThanaDetailView(APIView):
   
    def get_object(self,pk):
        try:
            return Thana.objects.get(pk=pk)
        except Thana.DoesNotExist:
            raise Http404

    
    def get(self,request,pk):
        thanas = self.get_object(pk)
        serializer = ThanaSerializer(thanas)
        response = serializer.data
        return Response(response,status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['PUT'])
    def put(self,request,pk,format=None):
        thanas = self.get_object(pk)
        serializer = ThanaSerializer(thanas,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=['DELETE'])
    def delete(self,request,pk,format=None):
        thanas = self.get_object(pk)
        thanas.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# class ThanaDetailView(generics.ListAPIView):
#     queryset = Thana.objects.all()
#     serializer_class = ThanaSerializer
#     filter_backends = [filters.SearchFilter]
#     search_fields = ['thana_name']

class MarketListView(APIView):
    
    def get(self,request,format=None):
        markets = MarketPoint.objects.all()
        serializer = MarketPointSerializer(markets,many=True)
        response = serializer.data
        return Response(response,status=status.HTTP_200_OK)
    @action(detail=True, methods=['POST'])       
    def post(self,request,format=None):
        serializer = MarketPointSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MarketDetailView(APIView):
   
    def get_object(self,pk):
        try:
            return MarketPoint.objects.get(pk=pk)
        except MarketPoint.DoesNotExist:
            raise Http404

    
    def get(self,request,pk):
        markets = self.get_object(pk)
        serializer = MarketPointSerializer(markets)
        response = serializer.data
        return Response(response,status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['PUT'])
    def put(self,request,pk,format=None):
        markets = self.get_object(pk)
        serializer = MarketPointSerializer(markets,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
   
    @action(detail=True, methods=['DELETE'])
    def delete(self,request,pk,format=None):
        markets = self.get_object(pk)
        markets.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ZoneListView(APIView):

    def get(self,request,format=None):
        zones = Zone.objects.all()
        serializer = ZoneSerializer(zones,many=True)
        response = serializer.data
        return Response(response,status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])      
    def post(self,request,format=None):
        serializer = ZoneSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ZoneDetailView(APIView):
   
    def get_object(self,pk):
        try:
            return Zone.objects.get(pk=pk)
        except Zone.DoesNotExist:
            raise Http404

    
    def get(self,request,pk):
        zones = self.get_object(pk)
        serializer = ZoneSerializer(zones)
        response = serializer.data
        return Response(response,status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['PUT'])
    def put(self,request,pk,format=None):
        zones = self.get_object(pk)
        serializer = ZoneSerializer(zones,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=['DELETE'])
    def delete(self,request,pk,format=None):
        zones = self.get_object(pk)
        zones.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)