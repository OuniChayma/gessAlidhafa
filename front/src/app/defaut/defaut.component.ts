import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-defaut',
  imports: [RouterLink],
  templateUrl: './defaut.component.html',
  styleUrl: './defaut.component.css'
})
export class DefautComponent {
  print(){
    window.print();
  }

}
