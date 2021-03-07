import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DivisionService } from '../services/division.service';
import { DistrictService } from '../services/district.service';


import { DivisionComponent } from './division/division.component';
import { DistrictComponent } from './district/district.component';
import { GridComponent } from '../grid/grid.component';


import { MainComponent } from './main.component';

const routes:Routes=[
  {path : 'main', component: MainComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    DistrictComponent,
    DivisionComponent, 
    GridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents(GridComponent)
  ],
  providers:[
    DivisionService,
    DistrictService,
  ]
})
export class MainModule { }
