import { Injectable } from '@angular/core';
import { Categoria } from '../../Interfaces/CategoriaProduto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProdutoService {
  private apiUrl = 'http://localhost:3000/categorias'
  constructor( private http: HttpClient) { }

  getCategoriaProduto() :Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.apiUrl)
  }
}
