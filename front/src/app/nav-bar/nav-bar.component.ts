import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/login.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  type?: string;

  constructor(private router :Router , private service : AuthService) {
    if(localStorage.getItem("type")){
      this.type = localStorage.getItem("type") || ''; 
    }else{
      this.router.navigate(["/login"]);
    }
  }

  logout(){
    this.service.logout()
  }
}