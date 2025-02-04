import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes this service available globally
})
export class BillService {
  private apiUrl = 'http://localhost:5000/api/bills'; // Your backend API

  constructor(private http: HttpClient) {}

  // Fetch all bills
  getBills(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new bill
  addBill(bill: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, bill);
  }

  // Delete a bill
  deleteBill(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

