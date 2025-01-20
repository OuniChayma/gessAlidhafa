import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PompisteComponent } from './pompiste/pompiste.component';
import { BenifiquePIComponent } from './benifique-pi/benifique-pi.component';
import { BenifiqueAEPComponent } from './benifique-aep/benifique-aep.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { DetteBenifiqueComponent } from './dette-benifique/dette-benifique.component';
import { DetteGessComponent } from './dette-gess/dette-gess.component';
import { ReunionAdministratifComponent } from './reunion-administratif/reunion-administratif.component';

export const routes: Routes = [
    //login
    {path : '', component : LoginComponent},
    {path : 'login', component : LoginComponent},
    //home
    {path : 'pi', component : HomeComponent},
    {path : 'aep', component : HomeComponent},
    {path : 'pi/home', component : HomeComponent},
    {path : 'aep/home', component : HomeComponent},
    //pompiste
    {path : 'pi/pompiste', component : PompisteComponent},
    {path : 'aep/pompiste', component : PompisteComponent},
    //benifique
    {path : 'pi/benifique', component : BenifiquePIComponent},
    {path : 'aep/benifique', component : BenifiqueAEPComponent},
    //liste de demande
    {path : 'pi/listedemande', component : ListeDemandeComponent},
    {path : 'aep/listedemande', component : ListeDemandeComponent},
    //dette benifique
    {path : 'pi/dettebenifique', component : DetteBenifiqueComponent},
    {path : 'aep/dettebenifique', component : DetteBenifiqueComponent},
    //dette gess
    {path : 'pi/dettegess', component : DetteGessComponent},
    {path : 'aep/dettegess', component : DetteGessComponent},
    //reunion administratif
    {path : 'pi/reunionadministratif', component : ReunionAdministratifComponent},
    {path : 'aep/reunionadministratif', component : ReunionAdministratifComponent},

];
