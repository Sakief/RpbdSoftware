import os
import datetime
import pandas as pd
from collections import namedtuple
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
from django.views.generic import TemplateView
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
    DealerProfile,
    DealerShipBrand,
    DealerShipSales,
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
    ThanaDetailReportSerializer,
    DealerProfileSerializer,
    DealerShipBrandSerializer,
    DelaerShipSalesSerializer,
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
    thana_name,
    SUM(r.end_month_volume) AS Market_Size,
    COUNT(DISTINCT market_code_id) as mokam,
    COUNT(DISTINCT outlet_id) as total_retail,
    date_format(r.end_month,'%M-%Y') as end_month,
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

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class CrownSummaryReportView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    A.Market_Size,
    B.thana_name,
    B.crown_presence_mokam,
    B.crown_retail,
    B.crown_sales,
    date_format(B.end_month, '%M-%Y') as end_month,
    B.district_name,
    concat(cast((B.crown_sales/A.Market_Size)*100 as decimal(10,2)),'%') as Crown_Share
FROM
    (SELECT 
        thana_name,
            SUM(end_month_volume) AS Market_Size,
            COUNT(DISTINCT market_code_id) AS mokam,
            COUNT(DISTINCT outlet_id) AS total_retail,
            end_month,
            district_name
    FROM
        brand, retail, profile, thana, district
    WHERE
        brand_code_id = brand_code
            AND thana_code = thana_code_id
            AND district_code = district_code_id
            AND outlet_id = outlet_id_id
    GROUP BY thana_code
    ORDER BY thana_name , Market_Size DESC) AS A,
    (SELECT DISTINCT
        thana_name,
            COUNT(DISTINCT market_code_id) AS crown_presence_mokam,
            COUNT(DISTINCT outlet_id) AS crown_retail,
            SUM(end_month_volume) AS crown_sales,
            end_month,
            district_name
    FROM
        brand, retail, profile, thana, district
    WHERE
        brand_code_id = '36'
            AND thana_code = thana_code_id
            AND district_code = district_code_id
            AND outlet_id = outlet_id_id
    GROUP BY thana_name , brand_code
    ORDER BY thana_name) AS B
WHERE
    A.thana_name = B.thana_name;
""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class ThanaLeadingBrandReportView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    X.Market_Size,
    Y.thana_name,
    Y.brand_name,
    Y.LeadingBrandRetail,
    Y.LeadingBrandSales,
    date_format(X.end_month, '%M-%Y') as end_month,
    X.district_name,
    concat(cast((Y.LeadingBrandSales/X.Market_Size)*100 as decimal(10,2)),'%') as Leading_brand_share
FROM
    (SELECT 
        t.thana_name,
            SUM(r.end_month_volume) AS Market_Size,
            COUNT(DISTINCT market_code_id) AS mokam,
            COUNT(DISTINCT outlet_id) AS total_retail,
            r.end_month,
            d.district_name
    FROM
        brand b, retail r, profile p, thana t, district d
    WHERE
        r.brand_code_id = b.brand_code
            AND t.thana_code = p.thana_code_id
            AND d.district_code = p.district_code_id
            AND p.outlet_id = r.outlet_id_id
    GROUP BY t.thana_code
    ORDER BY t.thana_name , Market_Size DESC) AS X,
    (SELECT 
        thana_name,
            brand_name,
            LeadingBrandRetail,
            MAX(LeadSale) AS LeadingBrandSales
    FROM
        (SELECT 
        thana_name,
            brand_name,
            COUNT(DISTINCT outlet_id) AS LeadingBrandRetail,
            SUM(end_month_volume) AS LeadSale,
            r.end_month,
            district_name
    FROM
        brand, thana, retail r, profile, district
    WHERE
        brand_code_id = brand_code
            AND thana_code = thana_code_id
            AND district_code = district_code_id
            AND outlet_id = outlet_id_id
    GROUP BY thana_code , brand_name
    ORDER BY LeadSale DESC) AS leadvalue
    GROUP BY thana_name) AS Y
WHERE
    X.thana_name = Y.thana_name

""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class DistrictSaleVolumeView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    X.district_name,
    Y.brand_name,
    Y.start_month_sale_volume,
    Y.end_month_sale_volume,
    date_format(Y.start_month,'%M-%Y') as start_month,
    date_format(Y.end_month,'%M-%Y') as end_month,
    CONCAT(CAST((Y.end_month_sale_volume / X.total_end_month) * 100
                AS DECIMAL (10 , 2 )),
            '%') AS end_month_ms,
    CONCAT(CAST((Y.start_month_sale_volume / X.total_start_month) * 100
                AS DECIMAL (10 , 2 )),
            '%') AS start_month_ms
FROM
    (SELECT 
        COUNT(DISTINCT (outlet_id_id)) AS 'Total Visited Retail',
            COUNT(DISTINCT (brand_code_id)) AS 'Total No of brands',
            d.district_name,
            SUM(r.start_month_volume) AS total_start_month,
            SUM(r.end_month_volume) AS total_end_month,
            r.start_month,
            r.end_month
    FROM
        retail r, district d, profile p
    WHERE
        d.district_code = p.district_code_id
            AND r.outlet_id_id = p.outlet_id) AS X,
    (SELECT 
        b.brand_name,
            SUM(r.start_month_volume) AS start_month_sale_volume,
            SUM(r.end_month_volume) AS end_month_sale_volume,
            r.start_month,
            r.end_month
    FROM
        retail r, brand b, profile p
    WHERE
        r.brand_code_id = b.brand_code
            AND p.outlet_id = r.outlet_id_id
    GROUP BY brand_code_id
    ORDER BY SUM(r.start_month_volume) DESC) AS Y;
""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class DistrictEndRetailCoverage(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
	b.brand_name as brand_name,
	date_format(r.end_month,'%M-%Y') as end_month,
    COUNT(id) as end_retail_counts ,
	d.district_name
FROM
    retail r,
    brand b,
    district d,
    profile p
WHERE
		end_month_volume > 0
        AND r.brand_code_id = b.brand_code
		AND d.district_code = p.district_code_id
        AND r.outlet_id_id = p.outlet_id

GROUP BY
		brand_code;
        
""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class DistrictStartRetailCoverage(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """
SELECT 
    b.brand_name AS brand_name,
    date_format(r.start_month,'%M-%Y') as start_month,
    COUNT(id) AS start_retail_counts,
    d.district_name
FROM
    retail r,
    brand b,
    district d,
    profile p
WHERE
    start_month_volume > 0
        AND r.brand_code_id = b.brand_code
        AND d.district_code = p.district_code_id
        AND r.outlet_id_id = p.outlet_id
GROUP BY brand_code;
        
""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class ThanaSalesVolumeView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
	X.district_name,
    X.brand_name,
    X.volume_start,
    X.volume_end,
    X.thana_name,
    date_format(X.start_month, '%M-%Y') as start_month,
    date_format(X.end_month, '%M-%Y') as end_month,
    CONCAT(CAST((X.volume_end / Y.End_Market_Size) * 100 AS DECIMAL (10 , 2 )),
            '%') AS end_month_ms,
	CONCAT(CAST((X.volume_start / Y.Start_Market_Size) * 100 AS DECIMAL (10 , 2 )),
            '%') AS start_month_ms
FROM
    (SELECT 
        b.brand_name,
            SUM(r.start_month_volume) AS volume_start,
            SUM(r.end_month_volume) AS volume_end,
            t.thana_name,
            d.district_name,
            r.start_month,
            r.end_month
    FROM
        brand b, retail r, profile p, thana t, district d
    WHERE
        r.brand_code_id = b.brand_code
            AND t.thana_code = p.thana_code_id
            AND d.district_code = p.district_code_id
            AND p.outlet_id = r.outlet_id_id
    GROUP BY brand_code_id , thana_code_id , district_code_id
    ORDER BY t.thana_name , volume_end DESC) AS X,
    (SELECT 
        t.thana_name,
            SUM(r.end_month_volume) AS End_Market_Size,
            SUM(r.start_month_volume) AS Start_Market_Size
    FROM
        brand b, retail r, profile p, thana t, district d
    WHERE
        r.brand_code_id = b.brand_code
            AND t.thana_code = p.thana_code_id
            AND d.district_code = p.district_code_id
            AND p.outlet_id = r.outlet_id_id
    GROUP BY t.thana_code
    ORDER BY t.thana_name) AS Y
    
WHERE X.thana_name = Y.thana_name;
    
""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class ThanaEndRetailCoverage(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    b.brand_name AS brand_name,
    date_format(r.end_month,'%M-%Y') as end_month,
    COUNT(id) AS end_retail_counts,
    t.thana_name,
    d.district_name
FROM
    retail r,
    brand b,
    district d,
    profile p,
    thana t
WHERE
    end_month_volume > 0
        AND r.brand_code_id = b.brand_code
        AND d.district_code = p.district_code_id
        AND t.thana_code = p.thana_code_id
        AND r.outlet_id_id = p.outlet_id
        
GROUP BY brand_name, thana_code;
""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class ThanaStartRetailCoverage(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    b.brand_name AS brand_name,
    date_format(r.start_month,'%M-%Y') as start_month,
    COUNT(id) AS start_retail_counts,
    t.thana_name,
    d.district_name
FROM
    retail r,
    brand b,
    district d,
    profile p,
    thana t
WHERE
    start_month_volume > 0
        AND r.brand_code_id = b.brand_code
        AND d.district_code = p.district_code_id
        AND t.thana_code = p.thana_code_id
        AND r.outlet_id_id = p.outlet_id
        
GROUP BY brand_name, thana_code;

""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class MarketSalesVolumeView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    X.district_name,
    X.thana_name,
    X.market_name,
    X.brand_name,
    X.volume_start,
    X.volume_end,
    date_format(X.start_month,'%M-%Y') as start_month, 
    date_format(X.end_month,'%M-%Y') as end_month,
    CONCAT(CAST((X.volume_end / Y.End_Market_Size) * 100 AS DECIMAL (10 , 2 )),
            '%') AS end_month_ms,
    CONCAT(CAST((X.volume_start / Y.Start_Market_Size) * 100
                AS DECIMAL (10 , 2 )),
            '%') AS start_month_ms
FROM
    (SELECT 
        b.brand_name,
            SUM(r.start_month_volume) AS volume_start,
            SUM(r.end_month_volume) AS volume_end,
            t.thana_name,
            r.start_month,
            r.end_month,
            d.district_name,
            m.market_name
    FROM
        brand b, retail r, profile p, thana t, district d, market m
    WHERE
        r.brand_code_id = b.brand_code
            AND t.thana_code = p.thana_code_id
            AND d.district_code = p.district_code_id
            AND m.market_code = p.market_code_id
            AND p.outlet_id = r.outlet_id_id
    GROUP BY brand_code_id , thana_code_id , district_code_id , market_code_id
    ORDER BY t.thana_name , volume_end DESC) AS X,
    (SELECT 
        m.market_name,
            SUM(r.end_month_volume) AS End_Market_Size,
            SUM(r.start_month_volume) AS Start_Market_Size,
            COUNT(DISTINCT market_code_id) AS mokam,
            COUNT(DISTINCT outlet_id) AS total_retail,
            r.end_month,
            d.district_name
    FROM
        brand b, retail r, profile p, thana t, district d, market m
    WHERE
        r.brand_code_id = b.brand_code
            AND t.thana_code = p.thana_code_id
            AND d.district_code = p.district_code_id
            AND p.outlet_id = r.outlet_id_id
            AND m.market_code = p.market_code_id
    GROUP BY m.market_code
    ORDER BY m.market_name) AS Y
WHERE
    X.market_name = Y.market_name;



""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class OutletSalesVolumeView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    X.district_name,
    X.thana_name,
    X.market_name,
    X.outlet_name,
    X.brand_name,
    X.volume_start,
    X.volume_end,
    date_format(X.start_month,'%M-%Y') as start_month,
    date_format(X.end_month,'%M-%Y') as end_month,
    CONCAT(CAST((X.volume_end / Y.End_Market_Size) * 100 AS DECIMAL (10 , 2 )),
            '%') AS end_month_ms,
    CONCAT(CAST((X.volume_start / Y.Start_Market_Size) * 100
                AS DECIMAL (10 , 2 )),
            '%') AS start_month_ms
FROM
    (SELECT 
        b.brand_name,
            SUM(r.start_month_volume) AS volume_start,
            SUM(r.end_month_volume) AS volume_end,
            t.thana_name,
            p.outlet_name,
            d.district_name,
            r.start_month,
            r.end_month,
            m.market_name
    FROM
        brand b, retail r, profile p, thana t, district d, market m
    WHERE
        r.brand_code_id = b.brand_code
            AND t.thana_code = p.thana_code_id
            AND d.district_code = p.district_code_id
            AND m.market_code = p.market_code_id
            AND p.outlet_id = r.outlet_id_id
    GROUP BY brand_code_id , thana_code_id , district_code_id , market_code_id , outlet_id_id
    ORDER BY t.thana_name , volume_end DESC) AS X,
    (SELECT 
        m.market_name,
            SUM(r.end_month_volume) AS End_Market_Size,
            SUM(r.start_month_volume) AS Start_Market_Size,
            COUNT(DISTINCT market_code_id) AS mokam,
            COUNT(DISTINCT outlet_id) AS total_retail,
            r.end_month,
            d.district_name,
            p.outlet_name
    FROM
        brand b, retail r, profile p, thana t, district d, market m
    WHERE
        r.brand_code_id = b.brand_code
            AND t.thana_code = p.thana_code_id
            AND d.district_code = p.district_code_id
            AND p.outlet_id = r.outlet_id_id
            AND m.market_code = p.market_code_id
    GROUP BY p.outlet_name
    ORDER BY m.market_name) AS Y
    
    WHERE X.outlet_name = Y.outlet_name
    """,
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class MokamSummaryViews(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    t.thana_name,
    m.market_name,
    SUM(r.end_month_volume) AS Market_Size,
    COUNT(DISTINCT outlet_id) AS total_retail,
    date_format(r.end_month,'%M-%Y') as end_month,
    d.district_name
FROM
    brand b,
    retail r,
    profile p,
    thana t,
    district d,
    market m
WHERE
    r.brand_code_id = b.brand_code
        AND t.thana_code = p.thana_code_id
        AND d.district_code = p.district_code_id
        AND p.outlet_id = r.outlet_id_id
        AND m.market_code = p.market_code_id
GROUP BY m.market_code
ORDER BY t.thana_name , Market_Size DESC;
""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class CrownMokamSummaryView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    
    B.thana_name,
    B.market_name,
    B.crown_retail,
    B.crown_sales,
    date_format(B.end_month,'%M-%Y') as end_month,
    B.district_name,
    CONCAT(CAST((B.crown_sales / A.Market_Size) * 100 AS DECIMAL (10 , 2 )),
            '%') AS Crown_Share
FROM
    (SELECT 
        thana_name,
            SUM(end_month_volume) AS Market_Size,
            COUNT(DISTINCT market_code_id) AS mokam,
            COUNT(DISTINCT outlet_id) AS total_retail,
            date_format(end_month,'%M-%Y') as end_month,
            district_name,
            market_name
    FROM
        brand, retail, profile, thana, district, market
    WHERE
        brand_code_id = brand_code
            AND thana_code = thana_code_id
            AND district_code = district_code_id
            AND outlet_id = outlet_id_id
            AND market_code = market_code_id
    GROUP BY market_code
    ORDER BY thana_name , Market_Size DESC) AS A,
    (SELECT DISTINCT
        thana_name,
            COUNT(DISTINCT market_code_id) AS crown_presence_mokam,
            COUNT(DISTINCT outlet_id) AS crown_retail,
            SUM(end_month_volume) AS crown_sales,
            end_month,
            district_name,
            market_name
    FROM
        brand, retail, profile, thana, district, market
    WHERE
        brand_code_id = '36'
            AND thana_code = thana_code_id
            AND district_code = district_code_id
            AND outlet_id = outlet_id_id
            AND market_code = market_code_id
    GROUP BY market_name , brand_code
    ORDER BY thana_name) AS B
WHERE
    A.market_name = B.market_name;
""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class LeadingBrandMokamSummaryView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute(
                """SELECT 
    Y.thana_name,
    Y.market_name,
    Y.brand_name,
    Y.LeadingBrandRetail,
    Y.LeadingBrandSales,
    date_format(X.end_month,'%M-%Y') as end_month,
    X.district_name,
    CONCAT(CAST((Y.LeadingBrandSales / X.Market_Size) * 100
                AS DECIMAL (10 , 2 )),
            '%') AS Leading_brand_share
FROM
    (SELECT 
        t.thana_name,
            SUM(r.end_month_volume) AS Market_Size,
            COUNT(DISTINCT market_code_id) AS mokam,
            COUNT(DISTINCT outlet_id) AS total_retail,
            r.end_month,
            d.district_name,
            m.market_name
    FROM
        brand b, retail r, profile p, thana t, district d, market m
    WHERE
        r.brand_code_id = b.brand_code
            AND t.thana_code = p.thana_code_id
            AND d.district_code = p.district_code_id
            AND p.outlet_id = r.outlet_id_id
            AND m.market_code = p.market_code_id
    GROUP BY m.market_code
    ORDER BY t.thana_name , Market_Size DESC) AS X,
    (SELECT 
        thana_name,
            brand_name,
            LeadingBrandRetail,
            MAX(LeadSale) AS LeadingBrandSales,
            market_name
    FROM
        (SELECT 
        thana_name,
            brand_name,
            COUNT(DISTINCT outlet_id) AS LeadingBrandRetail,
            SUM(end_month_volume) AS LeadSale,
            r.end_month,
            district_name,
            market_name
    FROM
        brand, thana, retail r, profile, district, market
    WHERE
        brand_code_id = brand_code
            AND thana_code = thana_code_id
            AND district_code = district_code_id
            AND outlet_id = outlet_id_id
            AND market_code = market_code_id
    GROUP BY market_code , brand_name
    ORDER BY LeadSale DESC) AS leadvalue
    GROUP BY market_name) AS Y
WHERE
    X.market_name = Y.market_name;
""",
            )

        def dictfetchall(cursor):
            "Return all rows from a cursor as a dict"

        columns = [col[0] for col in cursor.description]
        return Response([dict(zip(columns, row)) for row in cursor.fetchall()])


class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(
            request,
            "index.html",
            context=None,
        )


class DealerProfileGridView(APIView):
    def get(self, request, format=None):
        dealers = DealerProfile.objects.all()
        serializer = DealerProfileSerializer(dealers, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)


class DealerProfileCreateView(APIView):
    def get_object(self, pk):
        try:
            return DealerProfile.objects.get(pk=pk)
        except DealerProfile.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        dealers = DealerProfile.objects.all()
        serializer = DealerProfileSerializer(dealers, many=True)
        response = serializer.data
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def post(self, request, format=None):
        serializer = DealerProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Repsonse(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DealerProfileUpdateView(APIView):
    def get_object(self, pk):
        try:
            return DealerProfile.objects.get(pk=pk)
        except DealerProfile.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        dealers = self.get_object(pk)
        serializer = DealerProfileSerializer(dealers)
        response = serializer.data
        return Response(response, status=statu.HTTP_200_OK)

    @action(detail=True, methods=["PUT"])
    def put(self, request, pk, format=None):
        dealers_update = self.get_object(pk)
        serializer = DealerProfileSerializer(dealers_update, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["DELETE"])
    def delete(self, request, pk, format=None):
        dealers_delete = self.get_object(pk)
        dealers_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
