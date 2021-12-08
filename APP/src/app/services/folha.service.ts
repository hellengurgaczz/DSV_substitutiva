import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Folha } from '../Models/folha';


@Injectable({
  providedIn: 'root'
})

export class FolhaService {
  
  private baseUrl = "https://localhost:5001/api/folha"

  constructor(private http: HttpClient) {}

  create(folha: Folha): Observable<Folha>{
    return this.http.post<Folha>(`${this.baseUrl}/cadastrar`, folha)
  }

  list(): Observable<Folha[]>{
    return this.http.get<Folha[]>(`${this.baseUrl}/listar`);
  }

}