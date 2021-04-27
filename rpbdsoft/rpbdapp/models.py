from django.db import models
from datetime import datetime


class Division(models.Model):
    division_code = models.CharField(
        verbose_name="Division Code", max_length=2, primary_key=True
    )
    division_name = models.CharField(verbose_name="Division Name", max_length=20)

    def __str__(self):
        return self.division_code

    class Meta:
        db_table = "division"


class District(models.Model):
    district_code = models.CharField(
        verbose_name="District Code", max_length=4, primary_key=True
    )
    district_name = models.CharField(verbose_name="Ditrict Nmae", max_length=20)

    def __str__(self):
        return self.district_code

    class Meta:
        db_table = "district"


class Thana(models.Model):
    thana_code = models.CharField(
        verbose_name="Thana Code", max_length=6, primary_key=True
    )
    thana_name = models.CharField(verbose_name="Thana Name", max_length=20)

    def __str__(self):
        return self.thana_code

    class Meta:
        db_table = "thana"


class MarketPoint(models.Model):
    market_code = models.CharField(
        verbose_name="Market Point Code", max_length=10, primary_key=True
    )
    market_name = models.CharField(verbose_name="Market Point Name", max_length=20)

    def __str__(self):
        return self.market_code

    class Meta:
        db_table = "market"


class Zone(models.Model):
    zone_code = models.CharField(
        verbose_name="Zone Code", max_length=8, primary_key=True
    )
    zone_name = models.CharField(verbose_name="Zone Name", max_length=20)

    def __str__(self):
        return self.zone_code

    class Meta:
        db_table = "zone"


class Profile(models.Model):
    outlet_id = models.CharField(
        verbose_name="Outlet ID", max_length=12, primary_key=True
    )
    outlet_name = models.CharField(
        verbose_name="Outlet Name", max_length=50, blank=True, null=True
    )
    owner_name = models.CharField(
        verbose_name="Owner Name", max_length=70, blank=True, null=True
    )
    holding_no = models.CharField(
        verbose_name="Holding No", max_length=10, blank=True, null=True
    )
    road_name = models.CharField(
        verbose_name="Road Name/No", max_length=10, blank=True, null=True
    )
    block_no = models.CharField(
        verbose_name="Block No", max_length=10, blank=True, null=True
    )
    village = models.CharField(
        verbose_name="Village/Ward", max_length=20, blank=True, null=True
    )
    union = models.CharField(verbose_name="Union", max_length=20, blank=True, null=True)
    post_office = models.CharField(
        verbose_name="Post Office", max_length=20, blank=True, null=True
    )
    market_code = models.ForeignKey(MarketPoint, on_delete=models.CASCADE)
    zone_code = models.ForeignKey(Zone, on_delete=models.CASCADE)
    thana_code = models.ForeignKey(Thana, on_delete=models.CASCADE)
    district_code = models.ForeignKey(District, on_delete=models.CASCADE)
    outlet_type = models.CharField(
        verbose_name="Outlet Type", max_length=30, blank=True, null=True
    )
    manager_name = models.CharField(
        verbose_name="Manager/Incharge Name", max_length=50, blank=True, null=True
    )
    respondent_designation = models.CharField(
        verbose_name="Respondent Designation", max_length=30, blank=True, null=True
    )
    contact_no1 = models.CharField(
        verbose_name="Contact No 1", max_length=11, blank=True, null=True
    )
    contact_no2 = models.CharField(
        verbose_name="Contact No 2", max_length=11, blank=True, null=True
    )
    contact_no3 = models.CharField(
        verbose_name="Contact No 3", max_length=11, blank=True, null=True
    )
    total_staff = models.IntegerField(verbose_name="Total Staff", blank=True, null=True)
    outlet_landmark = models.CharField(
        verbose_name="Outlet Landmark", max_length=30, blank=True, null=True
    )
    gps_lat = models.DecimalField(
        verbose_name="GPS Lattitude",
        max_digits=9,
        decimal_places=6,
        blank=True,
        null=True,
    )
    gps_long = models.DecimalField(
        verbose_name="GPS Longitude",
        max_digits=9,
        decimal_places=6,
        blank=True,
        null=True,
    )
    storage_capacity = models.IntegerField(
        verbose_name="Storage Capacity", blank=True, null=True
    )
    front_length = models.IntegerField(
        verbose_name="Front Length", blank=True, null=True
    )
    front_width = models.IntegerField(verbose_name="Front Width", blank=True, null=True)
    weekly_holiday = models.IntegerField(
        verbose_name="Weekly Holiday", blank=True, null=True
    )
    nid = models.CharField(
        verbose_name="NID/Trade License No", max_length=30, blank=True, null=True
    )
    survey_by = models.CharField(
        verbose_name="Survey By", max_length=50, blank=True, null=True
    )
    entry_by = models.CharField(
        verbose_name="Entry By", max_length=50, blank=True, null=True
    )
    visit_date = models.DateField(verbose_name="Visit Date", blank=True, null=True)
    # entry_date = models.DateTimeField(verbose_name="Entry Date", default = datetime.now)

    def __str__(self):
        return self.outlet_id

    class Meta:
        db_table = "profile"
