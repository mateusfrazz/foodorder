import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../Interfaces/Produto';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DetalhamentoProdutoComponent } from '../detalhamento-produto/detalhamento-produto.component';

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
   @Input() exibirPromocao:boolean = false;
   @Output() onFavoritarProduto = new EventEmitter<Produto>();

   constructor(private dialog: MatDialog){}

   favoritarProduto(produto: Produto) {
      this.onFavoritarProduto.emit(produto)
      alert("adicionado aos favoritos")
   }

   openDetalheProduto(): void {
    const dialogRef = this.dialog.open(DetalhamentoProdutoComponent, {
      data: this.produto
    })
   }
}
