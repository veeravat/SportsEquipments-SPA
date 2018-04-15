import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from 'selenium-webdriver/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { UsersComponent } from './users/users.component';
import { EquipmentsComponent } from './equipments/equipments.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginPageComponent,
    HomeComponent,
    UsersComponent,
    EquipmentsComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
