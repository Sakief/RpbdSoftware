import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DivisionService } from '../services/division.service';
import { DistrictService } from '../services/district.service';

import { ThanaService } from '../services/thana.service';

import { DivisionComponent } from './division/division.component';
import { DistrictComponent } from './district/district.component';
import { ThanaComponent } from './thana/thana.component';
import { GridComponent } from '../grid/grid.component';

import { MainComponent } from './main.component';
import { DivisionViewComponent } from './division/division-view/division-view.component';
import { DistrictViewComponent } from './district/district-view/district-view.component';

import { ThanaViewComponent } from './thana/thana-view/thana-view.component';

import { ZoneService } from '../services/zone.service';

import { MarketService } from '../services/market-point.service';
import { AddDivisionComponent } from './division/add-division/add-division.component';
import { AddDistrictComponent } from './district/add-district/add-district.component';
import { AddThanaComponent } from './thana/add-thana/add-thana.component';

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

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'main/division', component: DivisionComponent },
  { path: 'main/district-view', component: DistrictComponent },
  { path: 'main/thana-view', component: ThanaComponent },

  { path: 'main/add-division', component: AddDivisionComponent },

  { path: 'main/profile-grid', component: ProfileGridComponent },
  { path: 'main/brand-grid', component: BrandGridComponent },
  { path: 'main/brand-create', component: BrandCreateComponent },
  { path: 'main/brand-update', component: BrandUpdateComponent },
  { path: 'main/zone-grid', component: ZoneGridComponent },
  { path: 'main/zone-create', component: ZoneCreateComponent },
  { path: 'main/zone-update', component: ZoneUpdateComponent },
  { path: 'main/market-grid', component: MarketGridComponent },
  { path: 'main/market-create', component: MarketCreateComponent },
  { path: 'main/market-update', component: MarketUpdateComponent },
  { path: 'main/profile-create', component: ProfileCreateComponent },
  { path: 'main/profile-update', component: ProfileUpdateComponent },
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
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents(GridComponent),
  ],
  providers: [
    DivisionService,
    DistrictService,
    ThanaService,
    ZoneService,
    MarketService,
  ],
})
export class MainModule {}
