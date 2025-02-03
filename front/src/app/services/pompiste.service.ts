import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PompisteService {

  private pompisteAjoutUrl = 'http://localhost:3000/pi/pompiste/ajouter';
  private pompisteGetAllUrl = 'http://localhost:3000/pi/pompiste';
  private pompisteDelete = 'http://localhost:3000/pi/pompiste/supprimer/';


  constructor(private http: HttpClient) {}

  addPompiste(data: any) : Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('token', `${token}`);
    
    return this.http.post<any>(this.pompisteAjoutUrl, data, { headers });
  }

  getAllPompiste() : Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('token', `${token}`);

    return this.http.get<any>(this.pompisteGetAllUrl, { headers });
  }

  deletePompiste(idpompiste : string) : Observable<any> {
    this.pompisteDelete = this.pompisteDelete+idpompiste ;

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('token', `${token}`);

    return this.http.put<any>(this.pompisteDelete,idpompiste,{ headers });
  }

  getOnePompiste(idPompiste : string) : Observable<any>{
    this.pompisteGetAllUrl = this.getAllPompiste +"/" +idPompiste ;

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('token', `${token}`);

    return this.http.get<any>(this.pompisteGetAllUrl, { headers });
  }

}
