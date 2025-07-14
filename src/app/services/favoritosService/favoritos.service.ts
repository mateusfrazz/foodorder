import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProdutoFavorito } from '../../Interfaces/FavoritoProduto/favoritarProduto';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  constructor() {}
  private favoritosSource = new BehaviorSubject<string>('');
  favoritos$ = this.favoritosSource.asObservable();

  viewFavoritos(favorito: string) {
    this.favoritosSource.next(favorito);
    console.log('[favoritosService] Favorito recebido');
  }
}
