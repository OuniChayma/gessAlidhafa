import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  type?: string;

  constructor(private router :Router ) {
    if(localStorage.getItem("type")){
      this.type = localStorage.getItem("type") || ''; 
    }else{
      this.router.navigate(["/login"]);
    }
  }
}