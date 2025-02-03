import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private apiUrl = 'http://localhost:3000/upload'; 

  constructor(private http: HttpClient) {}

  uploadFile(file: File, token: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name); 

    const headers = new HttpHeaders().set('token', `${token}`);

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
