import { Funcionario } from './../Models/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {
  
  private baseUrl = "https://localhost:5001/api/funcionario"

  constructor(private http: HttpClient) {}

  create(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(`${this.baseUrl}/cadastrar`, funcionario)
  }

  list(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${this.baseUrl}/listar`);
  }

}
