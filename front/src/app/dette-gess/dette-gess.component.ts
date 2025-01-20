import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-dette-gess',
  imports: [NavBarComponent],
  templateUrl: './dette-gess.component.html',
  styleUrl: './dette-gess.component.css'
})
export class DetteGessComponent {
  print(){//pour imprimer le tableau dette gess
    window.print();
  }
}
