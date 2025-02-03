import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/login.service';
import { FormsModule  } from '@angular/forms';
import { Login } from '../model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService, Login]
})
export class LoginComponent  {
  login : Login = new Login()
  message ?: string

  constructor(private service : AuthService ,private router :Router ){}

  onSubmit(){
    if (this.login.email && this.login.password) {
      this.service.login(this.login.email, this.login.password).subscribe(
        {
          next: (data) => {
            //console.log(data);
            localStorage.setItem("token" , data.token);
            localStorage.setItem("type" , data.type);
            let dir = data.type+"/home";
            this.router.navigate([dir]);
          },
          error: (error) => {
            if(error.status === 404){
              this.message = error.error.message;
            }else if(error.status === 400){
              this.message = error.error.message;
            }
          },
        }
      );
    } else {
      console.log("Please fill in both email and password.");
    }
  }
}
