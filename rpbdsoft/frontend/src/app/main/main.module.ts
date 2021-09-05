import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

//Service Components
import { DivisionService } from '../services/division.service';
import { DistrictService } from '../services/district.service';
import { ThanaService } from '../services/thana.service';
import { ZoneService } from '../services/zone.service';
import { MarketService } from '../services/market-point.service';
import { AddDivisionComponent } from './division/add-division/add-division.component';
import { AddDistrictComponent } from './district/add-district/add-district.component';
import { AddThanaComponent } from './thana/add-thana/add-thana.component';

//App Components
import { DivisionComponent } from './division/division.component';
import { DistrictComponent } from './district/district.component';
import { ThanaComponent } from './thana/thana.component';
import { GridComponent } from '../grid/grid.component';
import { MainComponent } from './main.component';
import { DivisionViewComponent } from './division/division-view/division-view.component';
import { DistrictViewComponent } from './district/district-view/district-view.component';
import { ThanaViewComponent } from './thana/thana-view/thana-view.component';
import { ProfileGridComponent } from './profile-grid/profile-grid.component';
import { ProfileCrudComponent } from './profile-crud/profile-crud.component';
import { BrandGridComponent } from './brand-grid/brand-grid.component';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { BrandUpdateComponent } from './brand-update/brand-update.component';
import { ZoneGridComponent } from './zone-grid/zone-grid.component';
import { ZoneCreateComponent } from './zone-create/zone-create.component';
import { ZoneUpdateComponent } from './zone-update/zone-update.component';
import { MarketGridComponent } from './market-grid/market-grid.component';
import { MarketCreateComponent } from './market-create/market-create.component';
import { MarketUpdateComponent } from './market-update/market-update.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { TopNavComponent } from './top-nav/top-nav.component';

//Angular Material Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpanPannelComponent } from './expan-pannel/expan-pannel.component';
import { MerchandisingGridComponent } from './merchandising-grid/merchandising-grid.component';
import { MerchandiseService } from '../services/merchandising.service';
import { MerchandisingCreateComponent } from './merchandising-create/merchandising-create.component';
import { MerchCreateComponent } from './merch-create/merch-create.component';
import { ReportComponent } from './report/report.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThanadetailreportComponent } from './reports/thanadetailreport/thanadetailreport/thanadetailreport.component';
import { Thanadetailservice } from '../services/thanadetailreport.service';
import { DistrictReportComponent } from './reports/districtsummaryreport/districtreport/districtreport.component';
import { DistrictretailsComponent } from './reports/districtsummaryreport/districtretails/districtretails/districtretails.component';
import { ThanasalesComponent } from './reports/thanasummaryreport/thanasalesreport/thanasales/thanasales.component';
import { ThanaretailsComponent } from './reports/thanaretails/thanaretails/thanaretails.component';
import { MarketSalesComponent } from './reports/marketsalessummary/market-sales/market-sales.component';
import { OutletsalesComponent } from './reports/outletsalesreport/outletsales/outletsales.component';
import { OverallmokamsummaryreportComponent } from './reports/overallmokamsummaryreport/overallmokamsummaryreport.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'top-nav', component: TopNavComponent },
  { path: 'main/division', component: DivisionComponent },
  { path: 'main/district-view', component: DistrictComponent },
  { path: 'main/thana-view', component: ThanaComponent },
  { path: 'main/add-division', component: AddDivisionComponent },
  // { path: 'brand-grid', component: BrandGridComponent },
  // { path: 'brand-create', component: BrandCreateComponent },
  // { path: 'brand-update', component: BrandUpdateComponent },
  {
    path: 'brand',
    children: [
      { path: 'brand-grid', component: BrandGridComponent },
      { path: 'brand-create', component: BrandCreateComponent },
      { path: 'brand-update', component: BrandUpdateComponent },
    ],
  },
  {
    path: 'zone',
    children: [
      { path: 'zone-grid', component: ZoneGridComponent },
      { path: 'zone-create', component: ZoneCreateComponent },
      { path: 'zone-update', component: ZoneUpdateComponent },
    ],
  },
  // { path: 'zone-grid', component: ZoneGridComponent },
  // { path: 'zone-create', component: ZoneCreateComponent },
  // { path: 'zone-update', component: ZoneUpdateComponent },
  {
    path: 'market',
    children: [
      { path: 'market-grid', component: MarketGridComponent },
      { path: 'market-create', component: MarketCreateComponent },
      { path: 'market-update', component: MarketUpdateComponent },
    ],
  },
  // { path: 'market-grid', component: MarketGridComponent },
  // { path: 'market-create', component: MarketCreateComponent },
  // { path: 'market-update', component: MarketUpdateComponent },
  {
    path: 'profile',
    children: [
      { path: 'profile-grid', component: ProfileGridComponent },
      { path: 'profile-create', component: ProfileCreateComponent },
      { path: 'profile-update', component: ProfileUpdateComponent },
    ],
  },
  // { path: 'profile-grid', component: ProfileGridComponent },
  // { path: 'profile-create', component: ProfileCreateComponent },
  // { path: 'profile-update', component: ProfileUpdateComponent },
  {
    path: 'merchandising',
    children: [
      { path: 'merchandising-grid', component: MerchandisingGridComponent },
      { path: 'merchandising-create', component: MerchandisingCreateComponent },
      //{ path: 'profile-update', component: ProfileUpdateComponent },
    ],
  },
  // {
  //   path: 'merchandising',
  //   children: [

  //     { path: 'merch-create', component: MerchCreateComponent }
  // ],
  // },
  {
    path: 'reports',
    children: [
      { path: 'overallthanareport', component: ThanadetailreportComponent },
      { path: 'districtreport', component: DistrictReportComponent },
      { path: 'districtretailsreport', component: DistrictretailsComponent },
      { path: 'thanasalesrport', component: ThanasalesComponent },
      { path: 'thanaretails', component: ThanaretailsComponent },
      { path: 'mokamsalesreport', component: MarketSalesComponent },
      {
        path: 'outletsalesreport',
        component: OutletsalesComponent,
      },
      {
        path: 'overallmokamreports',
        component: OverallmokamsummaryreportComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    MainComponent,
    DistrictComponent,
    DivisionComponent,
    ThanaComponent,
    GridComponent,
    DivisionViewComponent,
    AddDivisionComponent,
    DistrictViewComponent,
    ThanaViewComponent,
    AddDistrictComponent,
    AddThanaComponent,
    ProfileGridComponent,
    ProfileCrudComponent,
    BrandGridComponent,
    BrandCreateComponent,
    BrandUpdateComponent,
    ZoneGridComponent,
    ZoneCreateComponent,
    ZoneUpdateComponent,
    MarketGridComponent,
    MarketCreateComponent,
    MarketUpdateComponent,
    ProfileCreateComponent,
    ProfileUpdateComponent,
    TopNavComponent,
    ExpanPannelComponent,
    MerchandisingGridComponent,
    MerchandisingCreateComponent,
    MerchCreateComponent,
    ReportComponent,
    NavbarComponent,
    ThanadetailreportComponent,
    DistrictReportComponent,
    DistrictretailsComponent,
    ThanasalesComponent,
    ThanaretailsComponent,
    MarketSalesComponent,
    OutletsalesComponent,
    OverallmokamsummaryreportComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents(GridComponent),
    MatSliderModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
  ],
  exports: [MatSidenavModule, ReactiveFormsModule],
  providers: [
    DivisionService,
    DistrictService,
    ThanaService,
    ZoneService,
    MarketService,
    MerchandiseService,
  ],
})
export class MainModule {}
