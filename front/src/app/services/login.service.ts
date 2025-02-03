import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient , private router : Router) {}

  login(email : string , password : string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { "email" : email  , "motpass" : password });
  }

  logout() {
    localStorage.removeItem('token'); 
    localStorage.clear(); 
    this.router.navigate(['/login']); 
  }
}