import os
import datetime
import pandas as pd
from io import BytesIO
from reportlab.pdfgen import canvas
from django.http import HttpResponse
from reportlab.lib.pagesizes import letter, landscape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle
from reportlab.lib import colors
from reportlab.lib.units import mm, inch
from reportlab.lib.pagesizes import A4
import pymysql
from platform import python_version
from pyreportjasper import PyReportJasper
from django.db import connection
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from rest_framework.decorators import api_view, action
from rest_framework import generics, viewsets
from rpbdapp.models import (
    Division,
    District,
    Thana,
    MarketPoint,
    Zone,
    Profile,
    Brand,
    Merchandising,
    Retail,
)
from rpbdapp.serializers import (
    DivisionSerializer,
    DistrictSerializer,
    ThanaSerializer,
    MarketPointSerializer,
    ZoneSerializer,
    ProfileSerializer,
    BrandSerializer,
    MerchandisingSerializer,
    RetailSerializer,
    TestSqlSerializer,
)
from rest_framework.response import Response
from rest_framework import filters
from rest_framework import generics, status, viewsets, views
from rest_framework.views import APIView


class DivisionListView(APIView):
    def get(self, request, format=None):
        divisions = Division.objects.all()
        serializer = DivisionSerializer(divisions, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def post(self, request, format=None):
        serializer = DivisionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DisrtictListView(APIView):
    def get(self, request, format=None):
        districts = District.objects.all()
        serializer = DistrictSerializer(districts, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def post(self, request, format=None):
        serializer = DistrictSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ThanaListView(APIView):
    def get(self, request, format=None):
        thanas = Thana.objects.all()
        serializer = ThanaSerializer(thanas, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def post(self, request, fromat=None):
        serializer = ThanaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["PUT"])
    def put(self, request, pk, format=None):
        thanas = self.get_object(pk)
        serializer = ThanaSerializer(thanas, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ThanaDetailView(APIView):
    def get_object(self, pk):
        try:
            return Thana.objects.get(pk=pk)
        except Thana.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        thanas = self.get_object(pk)
        serializer = ThanaSerializer(thanas)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["PUT"])
    def put(self, request, pk, format=None):
        thanas = self.get_object(pk)
        serializer = ThanaSerializer(thanas, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["DELETE"])
    def delete(self, request, pk, format=None):
        thanas = self.get_object(pk)
        thanas.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# class ThanaDetailView(generics.ListAPIView):
#     queryset = Thana.objects.all()
#     serializer_class = ThanaSerializer
#     filter_backends = [filters.SearchFilter]
#     search_fields = ['thana_name']


class MarketGridView(APIView):
    def get(self, request, format=None):
        markets = MarketPoint.objects.all()
        serializer = MarketPointSerializer(markets, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    # @action(detail=True, methods=["POST"])
    # def post(self, request, format=None):
    #     serializer = MarketPointSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MarketCreateView(APIView):
    def get_object(self, pk):
        try:
            return MarketPoint.objects.get(pk=pk)
        except Zone.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        markets = MarketPoint.objects.all()
        serializer = MarketPointSerializer(self.zones, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def post(self, request, format=None):
        serializer = MarketPointSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MarketUpdateView(APIView):
    def get_object(self, pk):
        try:
            return MarketPoint.objects.get(pk=pk)
        except MarketPoint.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        markets = self.get_object(pk)
        serializer = MarketPointSerializer(self.markets)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["PUT"])
    def put(self, request, pk, format=None):
        markets = self.get_object(pk)
        serializer = MarketPointSerializer(markets, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["DELETE"])
    def delete(self, request, pk, format=None):
        markets = self.get_object(pk)
        markets.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# class MarketDetailView(APIView):
#     def get_object(self, pk):
#         try:
#             return MarketPoint.objects.get(pk=pk)
#         except MarketPoint.DoesNotExist:
#             raise Http404

#     def get(self, request, pk):
#         markets = self.get_object(pk)
#         serializer = MarketPointSerializer(markets)
#         response = serializer.data
#         return Response(response, status=status.HTTP_200_OK)

#     @action(detail=True, methods=["PUT"])
#     def put(self, request, pk, format=None):
#         markets = self.get_object(pk)
#         serializer = MarketPointSerializer(markets, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     @action(detail=True, methods=["DELETE"])
#     def delete(self, request, pk, format=None):
#         markets = self.get_object(pk)
#         markets.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


class ZoneListView(APIView):
    def get(self, request, format=None):
        zones = Zone.objects.all()
        serializer = ZoneSerializer(zones, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)


class ZoneCreateView(APIView):
    def get_object(self, pk):
        try:
            return Zone.objects.get(pk=pk)
        except Zone.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        zones = Zone.objects.all()
        serializer = ZoneSerializer(zones, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def post(self, request, format=None):
        serializer = ZoneSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ZoneUpdateView(APIView):
    def get_object(self, pk):
        try:
            return Zone.objects.get(pk=pk)
        except Zone.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        zones = self.get_object(pk)
        serializer = ZoneSerializer(zones)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["PUT"])
    def put(self, request, pk, format=None):
        zones = self.get_object(pk)
        serializer = ZoneSerializer(zones, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["DELETE"])
    def delete(self, request, pk, format=None):
        zones = self.get_object(pk)
        zones.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProfileGridView(APIView):
    def get(self, request, format=None):
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)


# class ProfileCrudView(APIView):
#     def get_object(self, pk):
#         try:
#             return Profile.objects.get(pk=pk)
#         except Profile.DoesNotExist:
#             raise Http404

#     def get(self, request, format=None):
#         profiles = Profile.objects.all()
#         serializer = ProfileSerializer(profiles, many=True)
#         response = serializer.data
#         return Response(response, status=status.HTTP_200_OK)

#     @action(detail=True, methods=["POST"])
#     def post(self, request, format=None):
#         serializer = ProfileSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileCreateView(APIView):
    def get_object(self, pk):
        try:
            return Profile.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def post(self, request, format=None):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileUpdateView(APIView):
    def get_object(self, pk):
        try:
            return Profile.objects.get(pk=pk)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        profiles = self.get_object(pk)
        serializer = ProfileSerializer(profiles)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["PUT"])
    def put(self, request, pk, format=None):
        profiles = self.get_object(pk)
        serializer = ProfileSerializer(profiles, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["DELETE"])
    def delete(self, request, pk, format=None):
        profiles = self.get_object(pk)
        profiles.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# class ProfileDeleteView(APIView):
#     def get_object(self, pk):
#         try:
#             return Profile.objects.get(pk=pk)
#         except Profile.DoesNotExist:
#             raise Http404

#     @action(detail=True, methods=["DELETE"])
#     def delete(self, request, pk, format=None):
#         profiles = self.get_object(pk)
#         profiles.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


class BrandGridView(APIView):
    def get(self, request, format=None):
        brands = Brand.objects.all()
        serializer = BrandSerializer(brands, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)


class BrandCreateView(APIView):
    def get_object(self, pk):
        try:
            return Brand.objects.get(pk=pk)
        except Brand.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        brands = Brand.objects.all()
        serializer = BrandSerializer(brands, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def post(self, request, format=None):
        serializer = BrandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BrandUpdateView(APIView):
    def get_object(self, pk):
        try:
            return Brand.objects.get(pk=pk)
        except Brand.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        brands = self.get_object(pk)
        serializer = BrandSerializer(brands)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["PUT"])
    def put(self, request, pk, format=None):
        brands = self.get_object(pk)
        serializer = BrandSerializer(brands, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["DELETE"])
    def delete(self, request, pk, format=None):
        brands = self.get_object(pk)
        brands.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class MerchandisingGridView(APIView):
    def get(self, request, format=None):
        brands = Merchandising.objects.all()
        serializer = MerchandisingSerializer(brands, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)


class MerchandisngCreateView(APIView):
    def get_object(self, pk):
        try:
            return Merchandising.objects.get(pk=pk)
        except Merchandising.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        merchandisings = Merchandising.objects.all()
        serializer = MerchandisingSerializer(merchandisings, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def post(self, request, format=None):
        serializer = MerchandisingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MerchandisingUpdateView(APIView):
    def get_object(self, pk):
        try:
            return Merchandising.objects.get(pk=pk)
        except Merchandising.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        merchandisings = self.get_object(pk)
        serializer = MerchandisingSerializer(merchandisings)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["PUT"])
    def put(self, request, pk, format=None):
        merchandisings = self.get_object(pk)
        serializer = MerchandisingSerializer(merchandisings, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["DELETE"])
    def delete(self, request, pk, format=None):
        merchandisings = self.get_object(pk)
        merchandisings.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class RetailGridView(APIView):
    def get(self, request, format=None):
        retails = Retail.objects.all()
        serializer = RetailSerializer(retails, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)


class RetailCreateView(APIView):
    def get_object(self, pk):
        try:
            return Retail.objects.get(pk=pk)
        except Retail.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        retails = Retail.objects.all()
        serializer = RetailSerializer(retails, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def post(self, request, format=None):
        serializer = RetailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RetailUpdateView(APIView):
    def get_object(self, pk):
        try:
            return Retail.objects.get(pk=pk)
        except Retail.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        retails = self.get_object(pk)
        serializer = RetailSerializer(merchandisings)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["PUT"])
    def put(self, request, pk, format=None):
        retails = self.get_object(pk)
        serializer = RetailSerializer(retails, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["DELETE"])
    def delete(self, request, pk, format=None):
        retails = self.get_object(pk)
        retails.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ThanaDetailReportView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    t.thana_name,
    SUM(r.end_month_volume) AS Market_Size,
    COUNT(DISTINCT market_code_id) as mokam,
    COUNT(DISTINCT outlet_id) as total_retail,
    r.end_month,
    d.district_name
FROM
    brand b,
    retail r,
    profile p,
    thana t,
    district d
WHERE
    r.brand_code_id = b.brand_code
        AND t.thana_code = p.thana_code_id
        AND d.district_code = p.district_code_id
        AND p.outlet_id = r.outlet_id_id
GROUP BY t.thana_code
ORDER BY t.thana_name , Market_Size DESC;
""",
            )

        row = cursor.fetchall()

        return Response(row)


class CrownSummaryReportView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT A.Market_Size, B.thana_name, B.crown_presence_mokam, B.crown_retail,B.crown_sales, B.end_month, B.district_name
FROM
(SELECT 
    thana_name,
    SUM(end_month_volume) AS Market_Size,
    COUNT(DISTINCT market_code_id) as mokam,
    COUNT(DISTINCT outlet_id) as total_retail,
    end_month,
    district_name
FROM
    brand ,
    retail ,
    profile ,
    thana ,
    district 
WHERE
    brand_code_id = brand_code
        AND thana_code = thana_code_id
        AND district_code = district_code_id
        AND outlet_id = outlet_id_id
GROUP BY thana_code
ORDER BY thana_name , Market_Size DESC) as A,

(SELECT DISTINCT
    thana_name,
    COUNT(DISTINCT market_code_id) AS crown_presence_mokam,
    COUNT(DISTINCT outlet_id) AS crown_retail,
    SUM(end_month_volume) AS crown_sales,
    end_month,
    district_name
FROM
    brand ,
    retail ,
    profile ,
    thana ,
    district 
WHERE
    brand_code_id = '36'
        AND thana_code = thana_code_id
        AND district_code = district_code_id
        AND outlet_id = outlet_id_id
GROUP BY thana_name , brand_code
ORDER BY thana_name) as B

WHERE A.thana_name = B.thana_name;
"""
            )
        row = cursor.fetchall()

        return Response(row)
