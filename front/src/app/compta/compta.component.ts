import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-compta',
  imports: [RouterLink],
  templateUrl: './compta.component.html',
  styleUrl: './compta.component.css'
})
export class ComptaComponent {

  print(){//pour imprimer le tableau dette gess
    window.print();
  }
}
