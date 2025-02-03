// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/register'; // Your API URL

  constructor(private http: HttpClient) {}

  registerUser(userData: User): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
