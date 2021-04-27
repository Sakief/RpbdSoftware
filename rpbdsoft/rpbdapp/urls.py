from django.urls import path
from rpbdapp import views

# router =  routers.DefaultRouters()
# router.register('')

urlpatterns = [
    # path('division-list/',views.division_list,name="division-list"),
    path("api/division-list/", views.DivisionListView.as_view()),
    path("api/district-list/", views.DisrtictListView.as_view()),
    path("api/thana-list/", views.ThanaListView.as_view()),
    path("api/thana-detail/<str:pk>", views.ThanaDetailView.as_view()),
    path("api/market-list/", views.MarketListView.as_view()),
    path("api/market-detail/<str:pk>/", views.MarketDetailView.as_view()),
    path("api/zone-list/", views.ZoneListView.as_view()),
    path("api/zone-detail/<str:pk>/", views.ZoneDetailView.as_view()),
    path("api/profile-grid/", views.ProfileGridView.as_view()),
    path("api/profile-crud/", views.ProfileCrudView.as_view()),
    # path('division-detail/<str:pk>/',views.division_detail,name="division-detail"),
    # path('division-list-search/', views.DivisionListView.as_view()),
    # path('division-create/',views.division_create,name="division-create"),
    # path('division-update/<str:pk>/',views.division_update,name="division-update"),
    # path('division-delete/<str:pk>/',views.division_delete,name="division-delete"),
    # path('division-crud/<str:pk>/',views.division_crud,name="division-crud"),
    # path('district-list/',views.district_list,name="district-list"),
    # path('district-detail/<str:pk>/',views.district_detail,name="district-detail"),
    # path('district-create/',views.district_create,name="district-create"),
    # path('thana-list/',views.thana_list,name="thana-list"),
    # path('thana-detail/<str:pk>/',views.thana_detail,name="thana-detail"),
    # path('thana-create/',views.thana_create,name="thana-create"),
    # path('thana-update/<str:pk>/',views.thana_update,name="thana-update"),
    # path('thana-delete/<str:pk>/',views.thana_delete,name="thana-delete"),
    # path('market-list/'),views.market_list,name="market-list"),
    # path('market-details/pk<str>',views.market_details,name="market_details"),
    # path('market-create/',views.market_create,name="market-create"),
    # path('market-update/<pk:str>/',views.market_update,name="market=update"),
    # path('market-delete/<pk:str>/',views.market_delete,name="market-delete"),
    # path('thana-detail-view/', views.ThanaDetailView.as_view()),
]
