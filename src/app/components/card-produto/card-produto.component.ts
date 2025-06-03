import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../Interfaces/Produto';
import { MatDialog } from '@angular/material/dialog';
import { DetalhamentoProdutoComponent } from '../detalhamento-produto/detalhamento-produto.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-card-produto',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatChipsModule,
  ],
  templateUrl: './card-produto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './card-produto.component.css',
})
export class CardProdutoComponent {
  @Input() produto!: Produto;
  @Input() exibirPromocao: boolean = false;
  @Input() exibirPreco: boolean = true;
  @Input() desconto!: number;
  @Output() onFavoritarProduto = new EventEmitter<Produto>();

  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) {}

  favoritarProduto(produto: Produto) {
    this.onFavoritarProduto.emit(produto);
    console.log('Produto favoritado:', produto);
    this._snackBar.open('adicionado aos favoritos', 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  openDetalheProduto(): void {
    const dialogRef = this.dialog.open(DetalhamentoProdutoComponent, {
      data: this.produto,
    });
  }
}
