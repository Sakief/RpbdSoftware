import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  //{path: '', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  declarations: [
    AppComponent,

    // GridComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AgGridModule,
    MainModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AgGridModule.withComponents([GridComponent]),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
