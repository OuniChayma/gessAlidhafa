import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-modele',
  standalone: true,
  imports: [CommonModule,NavBarComponent],
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css']
})
export class ModeleComponent {
  meters = [
    { oldNumber: 100, newNumber: 150, date: '2025-01-01' },
    { oldNumber: 150, newNumber: 200, date: '2025-01-15' },
    { oldNumber: 200, newNumber: 250, date: '2025-01-20' },
    { oldNumber: 100, newNumber: 150, date: '2025-02-10' },
    { oldNumber: 150, newNumber: 200, date: '2025-03-13' },
    { oldNumber: 200, newNumber: 250, date: '2025-03-04' }
  ];
}
