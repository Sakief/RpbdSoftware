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


class ThanaDetailReportSerializer(serializers.ModelSerializer):
    class Meta:

        field = (
            "thana_name",
            "market_size",
            "mokam",
            "total_retail",
            "end_month",
            "district_name",
        )


class DealerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        field = (
            "dealer_id",
            "dealer_name",
            "holding_no",
            "road_name",
            "block_no",
            "union",
            "post_office",
            "market_code",
            "zone_code",
            "thana_code",
            "district_code",
            "division_code",
            "manager_name",
            "respondent_designation",
            "contact_no1",
            "contact_no2",
            "contact_no3",
            "total_staff",
            "outlet_landmark",
            "outlet_status",
            "year_of_establishment",
            "monthly_average_volume",
            "total_retail",
            "self_transport",
            "storage_capacity",
            "front_length",
            "front_width",
            "business_pattern",
            "nid",
            "asset",
            "liability",
            "business_ethics",
            "succesor",
            "under_crown_dealer" "under_crown_sr",
            "potential_crown_dealer",
            "potential_crown_retailer",
        )


class DealerShipBrandSerializer(serializers.ModelSerializer):
    class Meta:
        field = (
            "deakership_code",
            "dealer_id",
            "brand_code",
            "delivery_service",
            "distribution_area_thana",
            "distribution_area_market",
            "brand_wise_manpower",
            "brand_wise_retail",
        )


class DelaerShipSalesSerializer(serializers.ModelSerializer):
    class Meta:
        field = (
            "dealership_code",
            "start_month",
            "end_month",
            "start_month_sales_volume",
            "end_month_sales_volume",
            "landing_price",
            "dp",
            "tp",
            "eup",
            "do_to_delivery_time",
            "monthly_credit",
            "micro_delivery",
        )
