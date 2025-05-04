import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../Interfaces/Produto';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DetalhamentoProdutoComponent } from '../detalhamento-produto/detalhamento-produto.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-produto',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
   @Input() produto!:Produto;
   @Input() exibirPromocao:boolean = false;
   @Input() exibirPreco:boolean = true;
   @Output() onFavoritarProduto = new EventEmitter<Produto>();

   constructor(private dialog: MatDialog, private _snackBar: MatSnackBar){}

   favoritarProduto(produto: Produto) {
      this.onFavoritarProduto.emit(produto)
      this._snackBar.open('adicionado aos favoritos', 'X', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
   }

   openDetalheProduto(): void {
    const dialogRef = this.dialog.open(DetalhamentoProdutoComponent, {
      data: this.produto
    })
   }
}
