import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ComptaComponent } from './compta/compta.component';
import { ConsommationComponent } from './consommation/consommation.component';
import { FactureComponent } from './facture/facture.component';
import { DistibutionComponent } from './distibution/distibution.component';
import { DefautComponent } from './defaut/defaut.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'navbar', component: NavBarComponent},
    {path: 'compta', component: ComptaComponent},
    {path: 'facture', component: FactureComponent},
    {path: 'distibution', component: DistibutionComponent},
    {path: 'defaut', component: DefautComponent},
    {path:'home',component:HomeComponent},
    {path:'consommation',component:ConsommationComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},


];
