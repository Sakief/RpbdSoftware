from rest_framework import serializers
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


class DivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Division
        fields = ("division_code", "division_name")
        # division_code = serializers.CharField(max_length=2,allow_blank=True)
        # division_name = serializers.CharField(allow_blank=True)


class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = ("district_code", "district_name")


class ThanaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thana
        fields = ("thana_code", "thana_name")


class MarketPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = MarketPoint
        fields = ("market_code", "market_name")


class ZoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zone
        fields = ("zone_code", "zone_name")


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = (
            "outlet_id",
            "outlet_type_id",
            "outlet_name",
            "owner_name",
            "holding_no",
            "road_name",
            "block_no",
            "village",
            "union",
            "post_office",
            "market_code",
            "zone_code",
            "thana_code",
            "district_code",
            "manager_name",
            "respondent_designation",
            "contact_no1",
            "contact_no2",
            "contact_no3",
            "outlet_landmark",
            "front_length",
            "front_width",
            "nid",
            "survey_by",
            "entry_by",
        )


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = (
            "brand_code",
            "brand_name",
            "company_name",
        )


class MerchandisingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Merchandising
        fields = (
            "outlet_id",
            "date",
            "brand_code",
            "merchandising_tools",
            "quantity",
        )


class RetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Retail
        fields = (
            "outlet_id",
            "start_month",
            "end_month",
            "visit_year",
            "brand_code",
            "vb",
            "start_month_volume",
            "end_month_volume",
            "purchase_min",
            "purchase_max",
            "sales_min",
            "sales_max",
            "purchase_source",
            "satisfaction_level",
            "do_to_delivery",
            "monthly_credit",
        )


class TestSqlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ("outlet_id", "front_width")
