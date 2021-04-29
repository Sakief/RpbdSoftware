# Generated by Django 3.1.7 on 2021-04-27 06:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("rpbdapp", "0006_auto_20210303_1546"),
    ]

    operations = [
        migrations.AlterField(
            model_name="marketpoint",
            name="market_name",
            field=models.CharField(max_length=60, verbose_name="Market Point Name"),
        ),
        migrations.CreateModel(
            name="Profile",
            fields=[
                (
                    "outlet_id",
                    models.CharField(
                        max_length=12,
                        primary_key=True,
                        serialize=False,
                        verbose_name="Outlet ID",
                    ),
                ),
                (
                    "outlet_name",
                    models.CharField(
                        blank=True, max_length=50, null=True, verbose_name="Outlet Name"
                    ),
                ),
                (
                    "owner_name",
                    models.CharField(
                        blank=True, max_length=70, null=True, verbose_name="Owner Name"
                    ),
                ),
                (
                    "holding_no",
                    models.CharField(
                        blank=True, max_length=10, null=True, verbose_name="Holding No"
                    ),
                ),
                (
                    "road_name",
                    models.CharField(
                        blank=True,
                        max_length=10,
                        null=True,
                        verbose_name="Road Name/No",
                    ),
                ),
                (
                    "block_no",
                    models.CharField(
                        blank=True, max_length=10, null=True, verbose_name="Block No"
                    ),
                ),
                (
                    "village",
                    models.CharField(
                        blank=True,
                        max_length=20,
                        null=True,
                        verbose_name="Village/Ward",
                    ),
                ),
                (
                    "union",
                    models.CharField(
                        blank=True, max_length=20, null=True, verbose_name="Union"
                    ),
                ),
                (
                    "post_office",
                    models.CharField(
                        blank=True, max_length=20, null=True, verbose_name="Post Office"
                    ),
                ),
                (
                    "outlet_type",
                    models.CharField(
                        blank=True, max_length=30, null=True, verbose_name="Outlet Type"
                    ),
                ),
                (
                    "manager_name",
                    models.CharField(
                        blank=True,
                        max_length=50,
                        null=True,
                        verbose_name="Manager/Incharge Name",
                    ),
                ),
                (
                    "respondent_designation",
                    models.CharField(
                        blank=True,
                        max_length=30,
                        null=True,
                        verbose_name="Respondent Designation",
                    ),
                ),
                (
                    "contact_no1",
                    models.CharField(
                        blank=True,
                        max_length=11,
                        null=True,
                        verbose_name="Contact No 1",
                    ),
                ),
                (
                    "contact_no2",
                    models.CharField(
                        blank=True,
                        max_length=11,
                        null=True,
                        verbose_name="Contact No 2",
                    ),
                ),
                (
                    "contact_no3",
                    models.CharField(
                        blank=True,
                        max_length=11,
                        null=True,
                        verbose_name="Contact No 3",
                    ),
                ),
                (
                    "total_staff",
                    models.IntegerField(
                        blank=True, null=True, verbose_name="Total Staff"
                    ),
                ),
                (
                    "outlet_landmark",
                    models.CharField(
                        blank=True,
                        max_length=30,
                        null=True,
                        verbose_name="Outlet Landmark",
                    ),
                ),
                (
                    "gps_lat",
                    models.DecimalField(
                        blank=True,
                        decimal_places=6,
                        max_digits=9,
                        null=True,
                        verbose_name="GPS Lattitude",
                    ),
                ),
                (
                    "gps_long",
                    models.DecimalField(
                        blank=True,
                        decimal_places=6,
                        max_digits=9,
                        null=True,
                        verbose_name="GPS Longitude",
                    ),
                ),
                (
                    "storage_capacity",
                    models.IntegerField(
                        blank=True, null=True, verbose_name="Storage Capacity"
                    ),
                ),
                (
                    "front_length",
                    models.IntegerField(
                        blank=True, null=True, verbose_name="Front Length"
                    ),
                ),
                (
                    "front_width",
                    models.IntegerField(
                        blank=True, null=True, verbose_name="Front Width"
                    ),
                ),
                (
                    "weekly_holiday",
                    models.IntegerField(
                        blank=True, null=True, verbose_name="Weekly Holiday"
                    ),
                ),
                (
                    "nid",
                    models.CharField(
                        blank=True,
                        max_length=30,
                        null=True,
                        verbose_name="NID/Trade License No",
                    ),
                ),
                (
                    "survey_by",
                    models.CharField(
                        blank=True, max_length=50, null=True, verbose_name="Survey By"
                    ),
                ),
                (
                    "entry_by",
                    models.CharField(
                        blank=True, max_length=50, null=True, verbose_name="Entry By"
                    ),
                ),
                (
                    "visit_date",
                    models.DateField(blank=True, null=True, verbose_name="Visit Date"),
                ),
                (
                    "district_code",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="rpbdapp.district",
                    ),
                ),
                (
                    "market_code",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="rpbdapp.marketpoint",
                    ),
                ),
                (
                    "thana_code",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="rpbdapp.thana"
                    ),
                ),
                (
                    "zone_code",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="rpbdapp.zone"
                    ),
                ),
            ],
            options={
                "db_table": "profile",
            },
        ),
    ]