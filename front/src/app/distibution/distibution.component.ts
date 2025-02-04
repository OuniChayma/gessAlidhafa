import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-distibution',
  imports: [RouterLink],
  templateUrl: './distibution.component.html',
  styleUrl: './distibution.component.css'
})
export class DistibutionComponent {
  print(){//pour imprimer le tableau dette gess
    window.print();
  }

}
