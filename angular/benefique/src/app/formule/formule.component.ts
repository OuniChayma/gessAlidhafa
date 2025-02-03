import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { User } from '../model/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formule',
  imports: [FormsModule],
  templateUrl: './formule.component.html',
  styleUrl: './formule.component.css'
})
export class FormuleComponent {
  router=inject(Router)
  firstName?:String
  lastName?:String
  age?:Number
  phone?:String
  birthDate?:Number
  city?:String
  job?:String
  postalCode?:Number
  adress?:String
  motdepass?:String
  maritalStatus?:String
  gender?:String
  user:User=new User()
  constructor(private register:ApiService){}
  onSubmit() {
    this.user.firstName=this.firstName
    this.user.lastName=this.lastName
    this.user.age=this.age
    this.user.phone=this.phone
    this.user.birthDate=this.birthDate
    this.user.city=this.city
    this.user.job=this.job
    this.user.postalCode=this.postalCode
    this.user.adress=this.adress
    this.user.motdepass=this.motdepass
    this.user.maritalStatus=this.maritalStatus
    this.user.gender=this.gender
    console.log(this.user)
    this.register.registerUser(this.user).subscribe(
      res=>{
        this.router.navigate(['/modele'])
      }
    )
  }
}
