from rest_framework import serializers
from rpbdapp.models import Division, District, Thana, MarketPoint, Zone, Profile


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
            "outlet_type",
            "manager_name",
            "respondent_designation",
            "contact_no1",
            "contact_no2",
            "contact_no3",
            "total_staff",
            "outlet_landmark",
            "gps_lat",
            "gps_long",
            "storage_capacity",
            "front_length",
            "front_width",
            "weekly_holiday",
            "nid",
            "survey_by",
            "entry_by",
            "visit_date",
        )
