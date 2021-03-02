import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';


import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

const routes : Routes = [
  //{path: '', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
