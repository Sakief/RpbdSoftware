from django.db import models
from datetime import datetime
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model


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
    market_name = models.CharField(verbose_name="Market Point Name", max_length=60)

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

    POTENTIAL_CHOICES = (
        ("Yes", "Yes"),
        ("No", "No"),
    )

    outlet_id = models.CharField(
        primary_key=True, verbose_name="Outlet ID", max_length=12
    )
    outlet_type_id = models.CharField(
        max_length=16, verbose_name="Outlet Type ID", unique=True, null=True, blank=True
    )
    outlet_name = models.CharField(
        verbose_name="Outlet Name", max_length=100, blank=True, null=True
    )
    owner_name = models.CharField(
        verbose_name="Owner Name", max_length=100, blank=True, null=True
    )
    holding_no = models.CharField(
        verbose_name="Holding No", max_length=100, blank=True, null=True
    )
    road_name = models.CharField(
        verbose_name="Road Name/No", max_length=400, blank=True, null=True
    )
    block_no = models.CharField(
        verbose_name="Block No", max_length=10, blank=True, null=True
    )
    village = models.CharField(
        verbose_name="Village/Ward", max_length=800, blank=True, null=True
    )
    union = models.CharField(verbose_name="Union", max_length=20, blank=True, null=True)
    post_office = models.CharField(
        verbose_name="Post Office", max_length=20, blank=True, null=True
    )
    market_code = models.ForeignKey(MarketPoint, on_delete=models.CASCADE)
    zone_code = models.ForeignKey(Zone, on_delete=models.CASCADE)
    thana_code = models.ForeignKey(Thana, on_delete=models.CASCADE)
    district_code = models.ForeignKey(District, on_delete=models.CASCADE)
    division_code = models.ForeignKey(Division, null=True, on_delete=models.CASCADE)

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

    outlet_landmark = models.CharField(
        verbose_name="Outlet Landmark", max_length=900, blank=True, null=True
    )
    # gps_lat = models.DecimalField(
    #     verbose_name="GPS Lattitude",
    #     max_digits=9,
    #     decimal_places=6,
    #     blank=True,
    #     null=True,
    # )
    # gps_long = models.DecimalField(
    #     verbose_name="GPS Longitude",
    #     max_digits=9,
    #     decimal_places=6,
    #     blank=True,
    #     null=True,
    # )
    outlet_status = models.CharField(
        verbose_name="Outlet Status", max_length=30, blank=True, null=True
    )
    year_established = models.CharField(
        verbose_name="Year of Estbalishment,", max_length=4, blank=True, null=True
    )
    business_status = models.CharField(
        verbose_name="Business Status", max_length=50, blank=True, null=True
    )
    gerographical_location = models.CharField(
        verbose_name="Geographical Location", max_length=100, blank=True, null=True
    )
    # storage_capacity = models.IntegerField(
    #     verbose_name="Storage Capacity", blank=True, null=True
    # )
    front_length = models.IntegerField(
        verbose_name="Front Length", blank=True, null=True
    )
    front_width = models.IntegerField(verbose_name="Front Width", blank=True, null=True)
    # weekly_holiday = models.IntegerField(
    #     verbose_name="Weekly Holiday", blank=True, null=True
    # )
    nid = models.CharField(
        verbose_name="NID/Trade License No", max_length=30, blank=True, null=True
    )
    survey_by = models.CharField(
        verbose_name="Survey By", max_length=50, blank=True, null=True
    )
    entry_by = models.CharField(
        verbose_name="Entry By", max_length=50, blank=True, null=True
    )
    # visit_date = models.DateField(verbose_name="Visit Date", blank=True, null=True)
    # entry_date = models.DateField(verbose_name="Entry Date", blank=True, null=True)
    under_crown_dealer = models.CharField(
        verbose_name="Under Crown Dealer", max_length=400, blank=True, null=True
    )
    under_crown_sr = models.CharField(
        verbose_name="Under Crown SR", max_length=100, null=True, blank=True
    )
    potential_as_crown_dealer = models.CharField(
        verbose_name="Potential as Crown Dealer",
        choices=POTENTIAL_CHOICES,
        max_length=50,
        null=True,
        blank=True,
    )
    potential_as_crown_retailer = models.CharField(
        verbose_name="Potential as Crown Dealer",
        choices=POTENTIAL_CHOICES,
        max_length=50,
        null=True,
        blank=True,
    )
    potential_as_crown_merchandising = models.CharField(
        verbose_name="Potential as Crown Dealer",
        choices=POTENTIAL_CHOICES,
        max_length=50,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.outlet_id

    class Meta:
        db_table = "profile"


class Brand(models.Model):
    brand_code = models.CharField(
        verbose_name="Brand Code", max_length=2, primary_key=True
    )
    brand_name = models.CharField(
        verbose_name="Brand Name", max_length=100, blank=True, null=True
    )
    company_name = models.CharField(
        verbose_name="Company Name", max_length=100, blank=True, null=True
    )

    def __str__(self):
        return self.brand_code

    class Meta:
        db_table = "brand"


class Merchandising(models.Model):
    outlet_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    date = models.CharField(
        verbose_name="Visit Month", max_length=100, null=True, blank=True
    )
    brand_code = models.ForeignKey(Brand, on_delete=models.CASCADE)
    merchandising_tools = models.CharField(
        verbose_name="Merchandising tools", max_length=200, null=True, blank=True
    )
    quantity = models.IntegerField(verbose_name="Quantity", blank=True, null=True)

    def __str__(self):
        return self.outlet_id

    class Meta:
        db_table = "merchandising"


class Retail(models.Model):
    outlet_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    start_month = models.DateField(verbose_name="Start Month", null=True, blank=True)

    end_month = models.DateField(verbose_name="End Month", null=True, blank=True)
    visit_year = models.CharField(
        verbose_name="Visit Year", max_length=10, null=True, blank=True
    )
    brand_code = models.ForeignKey(Brand, on_delete=models.CASCADE)
    vb = models.CharField(
        verbose_name="Visible Brand", max_length=15, null=True, blank=True
    )
    start_month_volume = models.SmallIntegerField(
        verbose_name="Start Month Volume", blank=True, null=True
    )
    end_month_volume = models.SmallIntegerField(
        verbose_name="End Month Volume", blank=True, null=True
    )
    purchase_min = models.SmallIntegerField(
        verbose_name="Purchase Min", blank=True, null=True
    )
    purchase_max = models.SmallIntegerField(
        verbose_name="Purchase Max", blank=True, null=True
    )
    sales_min = models.SmallIntegerField(
        verbose_name="Sales Min", blank=True, null=True
    )
    sales_max = models.SmallIntegerField(
        verbose_name="Sales Max", blank=True, null=True
    )
    purchase_source = models.CharField(
        verbose_name="Purchase Source", max_length=20, blank=True, null=True
    )
    satisfaction_level = models.CharField(
        verbose_name="Satisfaction Level", max_length=20, null=True, blank=True
    )
    # reason_for_disatisfaction = models.TextField(verbos_name="Reason for disatisfaction", null=True, blank=True)
    do_to_delivery = models.SmallIntegerField(
        verbose_name="Do to Delivery(in hrs)", null=True, blank=True
    )
    monthly_credit = models.SmallIntegerField(
        verbose_name="Monthly Credit", null=True, blank=True
    )
    # sr_visit_in_week = models.SmallIntegerField(verbose_name="SR visit in week", null=True, blank=True)

    def __str__(self):
        return self.outlet_id

    class Meta:
        db_table = "retail"


class DealerProfile(models.Model):
    dealer_id = models.CharField(
        verbose_name="Dealer ID", primary_key=True, max_length=12
    )
    dealer_name = models.CharField(
        verbose_name="Dealer Name", max_length=255, blank=True, null=True
    )
    holding_no = models.CharField(
        verbose_name="Holding No", max_length=255, null=True, blank=True
    )
    road_name = models.CharField(
        verbose_name="Road Name/No", max_length=255, null=True, blank=True
    )
    block_no = models.CharField(
        verbose_name="Block No", max_length=255, null=True, blank=True
    )
    union = models.CharField(
        verbose_name="Union", max_length=255, blank=True, null=True
    )
    post_office = models.CharField(
        verbose_name="Post Office", max_length=255, null=True, blank=True
    )
    market_code = models.ForeignKey(MarketPoint, on_delete=models.CASCADE)
    zone_code = models.ForeignKey(Zone, on_delete=models.CASCADE)
    thana_code = models.ForeignKey(Thana, on_delete=models.CASCADE)
    district_code = models.ForeignKey(District, on_delete=models.CASCADE)
    division_code = models.ForeignKey(Division, on_delete=models.CASCADE)
    manager_name = models.CharField(
        verbose_name="Manager Name", max_length=255, null=True, blank=True
    )
    respondent_designation = models.CharField(
        verbose_name="Respondent Designation", max_length=255, blank=True, null=True
    )
    contact_no1 = models.CharField(
        verbose_name="Contact No.1", max_length=11, null=True, blank=True
    )
    contact_no2 = models.CharField(
        verbose_name="Contatc No.2", max_length=11, blank=True, null=True
    )
    contact_no2 = models.CharField(
        verbose_name="Contact No.3", max_length=11, null=True, blank=True
    )
    total_staff = models.IntegerField(
        verbose_name="Total Staff No.", blank=True, null=True
    )
    outlet_landmark = models.CharField(
        verbose_name="Outlet Landmark", blank=True, max_length=255, null=True
    )
    outlet_status = models.CharField(
        verbose_name="Outlet Status", max_length=255, blank=True, null=True
    )
    year_of_establishment = models.CharField(
        verbose_name="Year of Establishment", max_length=255, blank=True, null=True
    )
    monthly_average_volume = models.IntegerField(
        verbose_name="Monthly avg. total volume", null=True, blank=True
    )
    total_retail = models.IntegerField(
        verbose_name="Total Retail", null=True, blank=True
    )
    self_transport = models.CharField(
        verbose_name="Self-Transport", null=True, blank=True, max_length=255
    )
    storage_capacity = models.BigIntegerField(
        verbose_name="Storage Capacity", null=True, blank=True
    )
    front_length = models.IntegerField(
        verbose_name="Front Length(ft)", null=True, blank=True
    )
    front_width = models.IntegerField(
        verbose_name="Front Width(ft)", null=True, blank=True
    )
    business_pattern = models.CharField(
        verbose_name="Busiense Pattern with %", max_length=255, null=True, blank=True
    )
    nid = models.CharField(
        verbose_name="NID/TRADE License no.", max_length=255, blank=True, null=True
    )
    asset = models.CharField(
        verbose_name="Asset", max_length=255, null=True, blank=True
    )
    liability = models.CharField(
        verbose_name="Liability", max_length=255, null=True, blank=True
    )
    business_ethics = models.CharField(
        verbose_name="Business Ethics", max_length=255, null=True, blank=True
    )
    successor = models.CharField(
        verbose_name="Successor", max_length=255, blank=True, null=True
    )
    under_crowns_dealer = models.CharField(
        verbose_name="Under Crown's Dealer", max_length=255, blank=True, null=True
    )
    under_crowns_sr = models.CharField(
        verbose_name="Under Crowns SR", max_length=255, null=True, blank=True
    )
    potential_crown_dealer = models.CharField(
        verbose_name="Potential as Crown Dealer", max_length=255, null=True, blank=True
    )
    potential_crown_retailer = models.CharField(
        verbose_name="Potential as Crown Retailer",
        max_length=255,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.dealer_id

    class Meta:
        db_table = "dealer_profile"


class DealerShipBrand(models.Model):
    dealership_code = models.CharField(
        verbose_name="Dealership Code",
        max_length=14,
        primary_key=True,
    )
    dealer_id = models.ForeignKey(DealerProfile, on_delete=models.CASCADE)
    brand_code = models.ForeignKey(Brand, on_delete=models.CASCADE)
    delivery_source = models.CharField(
        verbose_name="Delivery Source", max_length=255, blank=True, null=True
    )
    distribution_area_thana = models.ForeignKey(Thana, on_delete=models.CASCADE)
    distribution_area_market = models.ForeignKey(MarketPoint, on_delete=models.CASCADE)
    brand_wise_manpower = models.IntegerField(
        verbose_name="Brand Wise Manpower", null=True, blank=True
    )
    brand_wise_retail = models.IntegerField(
        verbose_name="Brand Wise Retail", null=True, blank=True
    )

    def __str__(self):
        return self.dealership_code

    class Meta:
        db_table = "dealership_brand"


class DealerShipSales(models.Model):
    dealership_code = models.ForeignKey(DealerShipBrand, on_delete=models.CASCADE)
    start_month = models.CharField(
        verbose_name="Start Month", max_length=255, null=True, blank=True
    )
    end_month = models.CharField(
        verbose_name="End Month", max_length=255, null=True, blank=True
    )
    start_month_sales_volume = models.IntegerField(
        verbose_name="Start Month Sales Volume", null=True, blank=True
    )
    end_month_sales_volume = models.IntegerField(
        verbose_name="End Month Sales Volume", null=True, blank=True
    )
    landing_pricce = models.IntegerField(
        verbose_name="Landing Price", null=True, blank=True
    )
    dp = models.IntegerField(verbose_name="DP", null=True, blank=True)
    tp = models.IntegerField(verbose_name="TP", null=True, blank=True)
    eup = models.IntegerField(verbose_name="EUP", null=True, blank=True)
    do_to_delivery_time = models.IntegerField(
        verbose_name="Do to delivery time", null=True, blank=True
    )
    monthly_credit = models.IntegerField(
        verbose_name="Monthly Credit", null=True, blank=True
    )
    micro_delivery = models.IntegerField(
        verbose_name="Micro Delivery in bags", null=True, blank=True
    )

    def __str__(self):
        return self.dealership_code

    class Meta:
        db_table = "dealership_sales"
