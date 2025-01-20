import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-benifique-pi',
  imports: [NavBarComponent],
  templateUrl: './benifique-pi.component.html',
  styleUrl: './benifique-pi.component.css'
})
export class BenifiquePIComponent {
  print(){
    window.print();
  }
}
