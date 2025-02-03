import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ModeleComponent } from './modele/modele.component';
import { Component } from '@angular/core';
import { ConceptionComponent } from './conception/conception.component';
import { DoyounComponent } from './doyoun/doyoun.component';
import { DemandeListComponent } from './demande/demande.component';
import { FormuleComponent } from './formule/formule.component';
import { AnneeComponent } from './annee/annee.component';
import { DemenComponent } from './demen/demen.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'navbar',
        component:NavBarComponent
    },
    { path: 'modele', 
    component: ModeleComponent },
    {
        path:'conception',
        component:ConceptionComponent
    },
    {
        path:'doyoun',
        component:DoyounComponent
    },
    {
        path:'demande',
        component:DemandeListComponent
    },
    {
        path:'formule',
        component:FormuleComponent
    },
    {
        path:'annee',
        component:AnneeComponent
    },
    {
        path:'demen',
        component:DemenComponent
    },
    
    



];
