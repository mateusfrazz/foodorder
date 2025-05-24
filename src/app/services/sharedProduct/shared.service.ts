import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  private categoriaSource = new BehaviorSubject<string>('');
  categoriaSelecionada$ = this.categoriaSource.asObservable();

  selecionarCategoria(categoria: string) {
    this.categoriaSource.next(categoria);
  }
}
