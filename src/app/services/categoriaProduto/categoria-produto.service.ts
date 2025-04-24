import { Injectable } from '@angular/core';
import { Produto } from '../../Interfaces/Produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProdutoService {
  private apiUrl = 'http://localhost:3000/categoria'
  constructor( private http: HttpClient) { }

  getCategoriaProduto() :Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiUrl)
  }
}
