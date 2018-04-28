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
import { AuthService } from './_services/auth.service';
import { UsersService } from './_services/users.service';
import { RentComponent } from './rent/rent.component';
import { EquipmentService } from './_services/equipment.service';
import { EquipInUseComponent } from './EquipInUse/EquipInUse.component';
import { UserReserveComponent } from './userReserve/userReserve.component';
import { NotifyService } from './_services/notify.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginPageComponent,
    HomeComponent,
    UsersComponent,
    EquipmentsComponent,
    RentComponent,
    EquipInUseComponent,
    UserReserveComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    DataTablesModule
  ],
  providers: [
    AuthService,
    UsersService,
    EquipmentService,
    NotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
