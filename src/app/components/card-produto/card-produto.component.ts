import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../Interfaces/Produto';

@Component({
  selector: 'app-card-produto',
  imports: [
    CommonModule,
  ],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
   @Input() produto!:Produto;
   @Output() onFavoritarProduto = new EventEmitter<Produto>()

   favoritarProduto(produto: Produto) {
      this.onFavoritarProduto.emit(produto)
      alert("adicionado aos favoritos")
   }
}
