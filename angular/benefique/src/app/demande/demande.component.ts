import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css'],
  imports:[NgFor,NavBarComponent],
})
export class DemandeListComponent {
  demandes = [
    { code: '680786', type: 'طلب ترشح عضوية مجلس ادارة المجمع', councilDate: '2024-07-26', requestDate: '2024-07-18', result: 'مقبول' },
    { code: '680787', type: 'طلب ترشح عضوية لجنة المالية', councilDate: '2024-08-01', requestDate: '2024-07-22', result: 'مرفوض' },
    { code: '680788', type: 'طلب ترشح عضوية لجنة الرقابة', councilDate: '2024-06-15', requestDate: '2024-06-10', result: 'مقبول' },  
    { code: '680786', type: 'طلب ترشح عضوية مجلس ادارة المجمع', councilDate: '2024-07-26', requestDate: '2024-07-18', result: 'مقبول' },
    { code: '680787', type: 'طلب ترشح عضوية لجنة المالية', councilDate: '2024-08-01', requestDate: '2024-07-22', result: 'مرفوض' },
    { code: '680788', type: 'طلب ترشح عضوية لجنة الرقابة', councilDate: '2024-06-15', requestDate: '2024-06-10', result: 'مقبول' },    
    { code: '680786', type: 'طلب ترشح عضوية مجلس ادارة المجمع', councilDate: '2024-07-26', requestDate: '2024-07-18', result: 'مقبول' },
    { code: '680787', type: 'طلب ترشح عضوية لجنة المالية', councilDate: '2024-08-01', requestDate: '2024-07-22', result: 'مرفوض' },
    { code: '680788', type: 'طلب ترشح عضوية لجنة الرقابة', councilDate: '2024-06-15', requestDate: '2024-06-10', result: 'مقبول' },    
    { code: '680786', type: 'طلب ترشح عضوية مجلس ادارة المجمع', councilDate: '2024-07-26', requestDate: '2024-07-18', result: 'مقبول' },
    { code: '680787', type: 'طلب ترشح عضوية لجنة المالية', councilDate: '2024-08-01', requestDate: '2024-07-22', result: 'مرفوض' },
    { code: '680788', type: 'طلب ترشح عضوية لجنة الرقابة', councilDate: '2024-06-15', requestDate: '2024-06-10', result: 'مقبول' },
    { code: '680786', type: 'طلب ترشح عضوية مجلس ادارة المجمع', councilDate: '2024-07-26', requestDate: '2024-07-18', result: 'مقبول' },
    { code: '680787', type: 'طلب ترشح عضوية لجنة المالية', councilDate: '2024-08-01', requestDate: '2024-07-22', result: 'مرفوض' },
    { code: '680788', type: 'طلب ترشح عضوية لجنة الرقابة', councilDate: '2024-06-15', requestDate: '2024-06-10', result: 'مقبول' },
    { code: '680786', type: 'طلب ترشح عضوية مجلس ادارة المجمع', councilDate: '2024-07-26', requestDate: '2024-07-18', result: 'مقبول' },
    { code: '680787', type: 'طلب ترشح عضوية لجنة المالية', councilDate: '2024-08-01', requestDate: '2024-07-22', result: 'مرفوض' },
    { code: '680788', type: 'طلب ترشح عضوية لجنة الرقابة', councilDate: '2024-06-15', requestDate: '2024-06-10', result: 'مقبول' }  
  ];

  searchQuery: string = '';

  get filteredDemandes() {
    return this.demandes.filter(demande =>
      demande.code.includes(this.searchQuery)
    );
  }

  onSearchChange() {

  }
}