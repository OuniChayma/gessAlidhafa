import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-doyoun',
  templateUrl: './doyoun.component.html',
  styleUrls: ['./doyoun.component.css'],
  imports:[NgFor,NavBarComponent],
})
export class DoyounComponent {
  debts = [
    { debtor: 'شركة المياه', amount: 350, dueDate: '2025-01-30', paid: false },
    { debtor: 'شركة المياه', amount: 300, dueDate: '2025-03-01', paid: false },
    { debtor: 'شركة المياه', amount: 250, dueDate: '2025-02-12', paid: true },
    { debtor: 'شركة المياه', amount: 300, dueDate: '2024-01-07', paid: true },
    { debtor: 'شركة المياه', amount: 350, dueDate: '2024-05-06', paid: true },
    { debtor: 'شركة المياه', amount: 250, dueDate: '2024-04-17', paid: true },
    { debtor: 'شركة المياه', amount: 300, dueDate: '2024-03-04', paid: true },
    { debtor: 'شركة المياه', amount: 250, dueDate: '2024-02-13', paid: true }

  
  ];
  handleClick() {
    const totalDebt = this.debts
      .filter(debt => !debt.paid)
      .reduce((sum, debt) => sum + debt.amount, 0);
    console.log(`إجمالي الديون غير المدفوعة: ${totalDebt} دينار`);
  }
}