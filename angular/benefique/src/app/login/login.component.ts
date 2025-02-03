import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../model/register';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  adress?:String
  motdepass?:String
  router=inject(Router)


  user:User=new User()
  constructor(private login:ApiService){}
  onSubmit() {
      
  this.user.adress=this.adress
  this.user.motdepass=this.motdepass
      
     
  console.log(this.user)
  this.login.registerUser(this.user).subscribe(
  res=>{
  this.router.navigate(['/modele'])
  }
  )

  }}

  


