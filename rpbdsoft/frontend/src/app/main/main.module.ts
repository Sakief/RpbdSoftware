import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

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
import { ZoneComponent } from './zone/zone.component';
import { ZoneListComponent } from './zone/zone-list/zone-list.component';
import { ZoneService } from '../services/zone.service';
import { MarketPointComponent } from './market-point/market-point.component';
import { MarketViewComponent} from './market-point/market-point-view/market-point-view.component';
import { MarketService } from '../services/market-point.service';
import { ThanaCrudComponent } from './thana/thana-crud/thana-crud.component';
import { AddDivisionComponent } from './division/add-division/add-division.component'



const routes:Routes=[
  {path : 'main', component: MainComponent},
  {path : 'main/division', component: DivisionComponent},
  {path : 'main/district-view', component: DistrictComponent},
  {path : 'main/thana-view', component: ThanaComponent},
  {path : 'main/zone-list', component: ZoneComponent},
  {path : 'main/add-division', component: AddDivisionComponent},
  {path : 'main/market-view',component:MarketViewComponent},
  {path : 'main/thana-crud/<str:pk>', component:ThanaCrudComponent},
  
];

@NgModule({
  declarations: [
    MainComponent,
    DistrictComponent,
    DivisionComponent,
    ThanaComponent, 
    ZoneComponent,
    GridComponent,
    DivisionViewComponent, 
    AddDivisionComponent,
    DistrictViewComponent, 
    ThanaViewComponent, 
    ZoneListComponent,
    MarketPointComponent ,
    MarketViewComponent,
    ThanaCrudComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents(GridComponent),
    
    
  ],
  providers:[
    DivisionService,
    DistrictService,
    ThanaService,
    ZoneService,
    MarketService
  ]
})
export class MainModule { }
