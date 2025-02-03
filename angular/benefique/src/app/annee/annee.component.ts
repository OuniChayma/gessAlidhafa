import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-annee',
  templateUrl: './annee.component.html',
  styleUrls: ['./annee.component.css'],
  imports:[NgIf,NgFor,NavBarComponent],

})
export class AnneeComponent {
  waterUsage = [
    { month: 'جانفي', percentage: 40, usage: 3000 },
    { month: 'فيفري ', percentage: 55, usage: 3700 },
    { month: 'مارس', percentage: 70, usage: 4500 },
    { month: 'افريل', percentage: 80, usage: 5000 },
    { month: 'ماي', percentage: 60, usage: 3800 },
    { month: 'جوان', percentage: 90, usage: 5500 },
    { month: 'جويلية', percentage: 85, usage: 5200 },
    { month: ' اوت', percentage: 50, usage: 3400 },
    { month: 'سبتمبر', percentage: 75, usage: 4600 },
    { month: 'أكتوبر', percentage: 65, usage: 4300 },
    { month: 'نوفمبر', percentage: 60, usage: 4000 },
    { month: 'ديسمبر', percentage: 45, usage: 3100 }
  ];
  filteredWaterUsage = [
    { month: 'ماي', percentage: 75, usage: 300 },
    { month: 'افريل',   percentage:70, usage: 200 },
    { month: 'مارس', percentage: 60, usage: 250 },
  ];

  get totalUsage(): number {
    return this.waterUsage.reduce((total, month) => total + month.usage, 0);
  }

  getTotalPercentage(): number {
    const totalPercentage = this.waterUsage.reduce((total, month) => total + month.percentage, 0);
    return Math.round(totalPercentage / this.waterUsage.length);
  }

  getProgressColor(percentage: number): string {
    if (percentage < 50) {
      return '#e76f51'; 
    } else if (percentage >= 50 && percentage < 75) {
      return '#f4a261'; 
    } else {
      return '#2a9d8f';
    }
  }

  getStatusMessage(percentage: number): string {
    if (percentage < 50) {
      return 'استهلاك منخفض، يجب توفير المزيد من الماء.';
    } else if (percentage >= 50 && percentage < 75) {
      return 'الاستهلاك ضمن الحدود الطبيعية.';
    } else {
      return 'الاستهلاك ممتاز، تم استخدام المياه بكفاءة.';
    }
  }
}
