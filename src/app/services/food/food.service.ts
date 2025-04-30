import { Injectable } from '@angular/core';
import { Produto } from '../../Interfaces/Produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
 private apiUrl = 'http://localhost:3000/produtos' //Passando o endpoint da api
  constructor(private http: HttpClient) { }
  
  getProdutos() :Observable<Produto[]>{ 
    return this.http.get<Produto[]>(this.apiUrl)
  }

  getProdutosEmPromocao(): Observable<Produto[]> {
    return this.getProdutos().pipe(
      map(produtos => produtos.filter(produto => produto.promocao === true))
    );
  }
  
}
