import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../../Interfaces/Produto';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-detalhamento-produto',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './detalhamento-produto.component.html',
  styleUrl: './detalhamento-produto.component.css',
})
export class DetalhamentoProdutoComponent {
  public produto!: Produto;
  constructor(
    public dialogRef: MatDialogRef<DetalhamentoProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto
  ) {
    this.produto = data;
  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  favoritar(produto: Produto): void {

  }

  adicionarAoCarrinho(produto: Produto): void {

  }

}
