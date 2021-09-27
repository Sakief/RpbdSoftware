from django.urls import path
from django.urls import path, include
from rpbdapp import views
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

# router =  routers.DefaultRouters()
# router.register('')

urlpatterns = [
    # path('division-list/',views.division_list,name="division-list"),
    path("api/division-list/", views.DivisionListView.as_view()),
    path("api/district-list/", views.DisrtictListView.as_view()),
    path("api/thana-list/", views.ThanaListView.as_view()),
    path("api/thana-detail/<str:pk>", views.ThanaDetailView.as_view()),
    path("api/market-grid/", views.MarketGridView.as_view()),
    path("api/market-create/", views.MarketCreateView.as_view()),
    path("api/market-update/<str:pk>", views.MarketUpdateView.as_view()),
    path("api/zone-list/", views.ZoneListView.as_view()),
    path("api/zone-create/", views.ZoneCreateView.as_view()),
    path("api/zone-update/<str:pk>", views.ZoneUpdateView.as_view()),
    path("api/profile-grid/", views.ProfileGridView.as_view()),
    # path("api/profile-crud/", views.ProfileCrudView.as_view()),
    path("api/profile-create/", views.ProfileCreateView.as_view()),
    path("api/profile-update/<str:pk>", views.ProfileUpdateView.as_view()),
    # path("api/profile-delete/<str:pk>", views.ProfileDeleteView.as_view()),
    path("api/brand-grid/", views.BrandGridView.as_view()),
    path("api/brand-create/", views.BrandCreateView.as_view()),
    path("api/brand-update/<str:pk>", views.BrandUpdateView.as_view()),
    path("api/merchandising-grid/", views.MerchandisingGridView.as_view()),
    path("api/merchandising-create/", views.MerchandisngCreateView.as_view()),
    path("api/merchandising-update/<int:pk>", views.MerchandisingUpdateView.as_view()),
    path("api/retail-grid/", views.RetailGridView.as_view()),
    path("api/retail-create/", views.RetailCreateView.as_view()),
    path("api/retail-update/<int:pk>", views.RetailUpdateView.as_view()),
    # path("api/report-jasper/", views.ReportJasper.as_view()),
    path("api/report/thanadetails", views.ThanaDetailReportView.as_view()),
    path("api/report/crownsummary", views.CrownSummaryReportView.as_view()),
    path("api/report/leadingbrandsummary", views.ThanaLeadingBrandReportView.as_view()),
    path("api/report/districtsalevolume", views.DistrictSaleVolumeView.as_view()),
    path("api/report/districtendretails", views.DistrictEndRetailCoverage.as_view()),
    path(
        "api/report/districtstartretails", views.DistrictStartRetailCoverage.as_view()
    ),
    path(
        "api/report/thanasalesvolume",
        views.ThanaSalesVolumeView.as_view(),
    ),
    path("api/report/thanaendretails", views.ThanaEndRetailCoverage.as_view()),
    path("api/report/thanastartretails", views.ThanaStartRetailCoverage.as_view()),
    path("api/report/marketsalesvolume", views.MarketSalesVolumeView.as_view()),
    path("api/report/outletsalesvolume", views.OutletSalesVolumeView.as_view()),
    path("api/report/mokamsummary", views.MokamSummaryViews.as_view()),
    path("api/report/crownmokamsummary", views.CrownMokamSummaryView.as_view()),
    path(
        "api/report/leadingbrandmokamsummary",
        views.LeadingBrandMokamSummaryView.as_view(),
    ),
    path("home", views.HomePageView.as_view()),
    path(r"api-token-auth/", obtain_jwt_token),
    path(r"api-token-refresh/", refresh_jwt_token),
]
