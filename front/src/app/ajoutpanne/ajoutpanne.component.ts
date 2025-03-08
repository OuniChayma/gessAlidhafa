import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ajoutpanne',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './ajoutpanne.component.html',
  styleUrl: './ajoutpanne.component.css'
})
export class AjoutpanneComponent implements OnInit {
  faultForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.faultForm = this.fb.group({
      sakoura: ['', Validators.required],
      beneficiaryType: ['', Validators.required],
      faultDetails: ['', Validators.required],
      interventionType: ['', Validators.required],
      repairCost: ['', [Validators.required, Validators.min(1)]],
      attachments: [''],
      purchasedMaterials: [''],
      additionalAttachments: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Form Submitted!');
    console.log('Form Validity:', this.faultForm.valid);
    console.log('Form Errors:', this.faultForm.errors);

    if (this.faultForm.valid) {
      console.log('Form Data:', this.faultForm.value);
      alert('تم تسجيل العطب بنجاح!');
    } else {
      console.log('Form is invalid. Please check required fields.');
      alert('يرجى ملء جميع الحقول المطلوبة.');
    }
  }
}