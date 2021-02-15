from django.db import models


class Division(models.Model):
    division_code = models.CharField(verbose_name="Division Code",max_length=20,primary_key=True)
    division_name = models.CharField(verbose_name="Division Name",max_length=20)

    def __str__(self):
        return self.division_code
    
    class Meta:
        db_table = "division"

class District(models.Model):
    district_code = models.CharField(verbose_name="District Code",max_length=20,primary_key=True)
    district_name = models.CharField(verbose_name="Ditrict Nmae",max_length=20)

    def __str__(self):
        return self.district_code

    class Meta:
        db_table = "district"

class Thana(models.Model):
    thana_code = models.CharField(verbose_name="Thana Code",max_length=20,primary_key=True)
    thana_name = models.CharField(verbose_name="Thana Name",max_length=20)

    def __str__(self):
        return self.thana_code
    class Meta:
        db_table = "thana"

class MarketPoint(models.Model):
    market_code = models.CharField(verbose_name="Market Point Code",max_length=20,primary_key=True)
    market_name = models.CharField(verbose_name="Market Point Name",max_length=20)

    def __str__(self):
        return self.market_code
    class Meta:
        db_table = "market"

# class Zone(models.Model):
#     zone_code = models.CharField(verbose_name="Zone Code",max_length=20,primary_key=True)
#     zone_name = models.CharField(verbose_name="Zone Name",max_length=20)

#     def __str__(self):
#         return self.zone_code
#     class Meta:
#         db_table = "zone"

# class Profile(models.Model):
#     record_id = models.CharField(verbose_name="Record No",max_length=20,primary_key=True)
#     outlet_name = models.CharField(verbose_name="Outlet Name",max_length=50)
#     owner_name = models.CharField(verbose_name="Outlet Owner Name",max_length=30)
#     crown_sap_id = models.CharField(verbose_name="Crown SAP ID",max_length=20)
#     # dealer_id = models.ForeignKey(Dealer,on_delete=models.CASCADE)
#     holding_no = models.CharField(verbose_name="Holding No",max_length=10)
#     road_name = models.CharField(verbose_name="Road No/Road Name",max_length=20)
#     block_no = models.CharField(verbose_name="Block No", max_length=10)
#     village_name = models.CharField(verbose_name="Village/Ward Name", max_length=20)
#     union_name = models.CharField(verbose_name="Union Name", max_length=30)
#     post_office = models.CharField(verbose_name="Post Office", max_length=20)
#     thana_code = models.ForeignKey(Thana,on_delete=models.CASCADE)
#     district_code = models.ForeignKey(District,on_delete=models.CASCADE)
#     division_code = models.ForeignKey(Division,on_delete=models.CASCADE)
#     outlet_type = models.CharField(verbose_name="Outlet Type",max_length=30,choices=OUTLET_TYPE)
#     manager_name = models.CharField(verbose_name="Manager/Incharge Name",max_length=50)
#     respondent_designation = models.CharField(verbose_name="Respondent Designation",max_length=30)
#     contact_no_1 = models.CharField(verbose_name="Contact No 1", max_length=15)
#     contact_no_2 = models.CharField(verbose_name="Contact No 2", max_length=15)
#     contact_no_3 = models.CharField(verbose_name="Contact No 3", max_length=15)
#     total_staff = models.IntegerField(verbose_name="Total Staff No")
#     outlet_status = models.CharField(verbose_name="Outlet Status",max_length=30,choices=OUTLET_STATUS)
#     year_establishment = models.CharField(verbose_name="Year of Estbalishment",max_length=4)
#     business_status = models.CharField(verbose_name="Business Status", max_length=30,choices=BUSINESS_STATUS)
#     geo_location = models.CharField(verbose_name="Geographical Location",max_length=30,choices=GEOGRAPHICAL_LOCATION)
#     gps_lat = models.DecimalField(verbose_name="GPS Latitude", max_digits=9, decimal_places=6)
#     gps_lon = models.DecimalField(verbose_name="GPS Longitude", max_digits=9, decimal_places=6)
#     storage_capacity = models.IntegerField(verbose_name="Storage Capacity")
#     front_length = models.IntegerField(verbose_name="Front Length")
#     front_width = models.IntegerField(verbose_name="Front Width")
#     outlet_image = models.ImageField(verbose_name="Outlet Image")
#     business_pattern = models.FloatField(verbose_name="Business Pattern with(%)")
#     weekly_holiday = models.IntegerField(verbose_name="Weekly Holiday")
#     nid = models.CharField(verbose_name="NID/Trade License No",max_length=30)
#     survey_by = models.CharField(verbose_name="Survey By",max_length=50)
#     # entry_by = models
#     visit_date = models.DateField(verbose_name="Visit Date")
#     entry_date = models.DateField(verbose_name="Entry Date", auto_now=True)



 

