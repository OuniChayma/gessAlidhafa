import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rapportsituation',
  imports: [RouterLink],
  templateUrl: './rapportsituation.component.html',
  styleUrl: './rapportsituation.component.css'
})
export class RapportsituationComponent {
  print(){
    window.print()
  }

}
