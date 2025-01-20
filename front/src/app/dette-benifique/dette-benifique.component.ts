import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-dette-benifique',
  imports: [NavBarComponent],
  templateUrl: './dette-benifique.component.html',
  styleUrl: './dette-benifique.component.css'
})
export class DetteBenifiqueComponent {
  print(){
    window.print();
  }
}
