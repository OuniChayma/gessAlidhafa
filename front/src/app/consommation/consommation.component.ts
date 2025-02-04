import { Component,  } from '@angular/core';
import { BillService } from '../services/bill.service';

@Component({
  selector: 'app-consommation',
  imports: [],
  templateUrl: './consommation.component.html',
  styleUrl: './consommation.component.css',

})
export class ConsommationComponent  {

  print(){//pour imprimer le tableau dette gess
    window.print();
  }
  
  
}
