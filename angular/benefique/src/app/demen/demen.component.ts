import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-demen',
  imports: [NavBarComponent],
  templateUrl: './demen.component.html',
  styleUrls: ['./demen.component.css']
})
export class DemenComponent {
  fullName: string = '';
  idNumber: string = '';
  birthDate: string = '';
  address: string = '';
  activity: string = '';
  experience: number = 0;
  phone: string = '';
  email: string = '';
  agreement: boolean = false;

  updateField(field: string, event: Event) {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    switch (field) {
      case 'fullName':
        this.fullName = inputElement.value;
        break;
      case 'idNumber':
        this.idNumber = inputElement.value;
        break;
      case 'birthDate':
        this.birthDate = inputElement.value;
        break;
      case 'address':
        this.address = inputElement.value;
        break;
      case 'activity':
        this.activity = inputElement.value;
        break;
      case 'experience':
        this.experience = +inputElement.value; 
        break;
      case 'phone':
        this.phone = inputElement.value;
        break;
      case 'email':
        this.email = inputElement.value;
        break;
      case 'agreement':
        this.agreement = (inputElement as HTMLInputElement).checked;
        break;
      default:
        break;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.agreement) {
      console.log('تم إرسال الطلب بنجاح:', this);
      alert('شكراً لتقديم طلبك! سيتم مراجعته قريباً.');
    } else {
      alert('يرجى الموافقة على الشروط قبل إرسال الطلب.');
    }
  }
}

