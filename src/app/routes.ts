import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { UsersComponent } from './users/users.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { RentComponent } from './rent/rent.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'users', component: UsersComponent},
    {path: 'equipments', component: EquipmentsComponent},
    {path: 'rent', component: RentComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
