from rest_framework import serializers
from rpbdapp.models import Division,District,Thana,MarketPoint

class DivisionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Division
        fields=('division_code', 
                'division_name')

class DistrictSerializer(serializers.ModelSerializer):

    class Meta:
        model = District
        fields=('district_code',
                'district_name')

class ThanaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Thana
        fields=('thana_code',
                'thana_name')

class MarketPointSerializer(serializers.ModelSerializer):

    class Meta:
        model = MarketPoint
        fields=('market_code',
                'market_name')

# class ProfilRecordSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Profile
#         fields=all