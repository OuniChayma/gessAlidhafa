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
import { AjoutpanneComponent } from './ajoutpanne/ajoutpanne.component';
import { AutrefactureComponent } from './autrefacture/autrefacture.component';
import { RecuventeeauComponent } from './recuventeeau/recuventeeau.component';
import { AutrerecueauComponent } from './autrerecueau/autrerecueau.component';
import { SituationfinanciereComponent } from './situationfinanciere/situationfinanciere.component';
import { RapportsituationComponent } from './rapportsituation/rapportsituation.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'navbar', component: NavBarComponent},
    {path: 'compta', component: ComptaComponent},
    {path: 'facture', component: FactureComponent},
    {path: 'distibution', component: DistibutionComponent},
    {path: 'defaut', component: DefautComponent},
    {path:'home',component:HomeComponent},
    {path:'consommation',component:ConsommationComponent},
    {path: 'ajoutpanne', component: AjoutpanneComponent},
    {path: 'autrefacture', component: AutrefactureComponent},
    {path: 'recuventeeau', component: RecuventeeauComponent},
    {path: 'autrerecueau', component: AutrerecueauComponent},
    {path: 'situationfinanciere', component: SituationfinanciereComponent},
    {path: 'rapportsituation', component: RapportsituationComponent},






    {path:'',redirectTo:'/home',pathMatch:'full'},


];
