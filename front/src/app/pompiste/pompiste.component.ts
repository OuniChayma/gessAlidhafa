import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-pompiste',
  imports: [NavBarComponent],
  templateUrl: './pompiste.component.html',
  styleUrl: './pompiste.component.css'
})
export class PompisteComponent {
  print(){
    window.print();
  }
}
