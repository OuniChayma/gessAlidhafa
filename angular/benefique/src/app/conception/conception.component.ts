import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-conception',
  imports: [NavBarComponent],
  templateUrl: './conception.component.html',
  styleUrl: './conception.component.css'
})
export class ConceptionComponent {
  title: string = 'Conception de votre projet';
  description: string = 'Voici la conception de votre projet détaillée avec des informations pertinentes.';

}
 