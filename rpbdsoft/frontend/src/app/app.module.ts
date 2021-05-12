import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';

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
    AgGridModule,
    MainModule,
    AuthModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AgGridModule.withComponents([GridComponent]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
