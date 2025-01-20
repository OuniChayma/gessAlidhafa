import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-benifique-aep',
  imports: [NavBarComponent],
  templateUrl: './benifique-aep.component.html',
  styleUrl: './benifique-aep.component.css'
})
export class BenifiqueAEPComponent {
  print(){
    window.print();
  }
}
