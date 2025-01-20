import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-liste-demande',
  imports: [NavBarComponent],
  templateUrl: './liste-demande.component.html',
  styleUrl: './liste-demande.component.css'
})
export class ListeDemandeComponent {
  print(){
    window.print();
  }
}
