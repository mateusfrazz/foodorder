import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../../Interfaces/Produto';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { FoodService } from '../../services/food/food.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detalhamento-produto',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './detalhamento-produto.component.html',
  styleUrl: './detalhamento-produto.component.css',
})
export class DetalhamentoProdutoComponent {
  public produto!: Produto;

  constructor(
    public dialogRef: MatDialogRef<DetalhamentoProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto,
    private cartService: CartService,
    private foodService: FoodService,
    private _snackBar: MatSnackBar
  ) {
    this.produto = data;
  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  favoritar(produto: Produto): void {
    produto.favorite = !produto.favorite;
    
    this.foodService.updateProduto(produto).subscribe({
      next: () => {
        this._snackBar.open(produto.favorite ? 'Adicionado aos favoritos' : 'Removido dos favoritos', 'X', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        
        // Em um app real usaríamos um Service compartilhado (Subject) para avisar o HomeComponent
        // Como o HomeComponent já escuta a categoria pai, ao fechar e recarregar, as mudanças da API refletirão.
        
        // Vamos recarregar a visualização fechando o modal se ele foi desfavoritado
        if(!produto.favorite) {
           this.fecharModal();
        }
      },
      error: (err) => {
        produto.favorite = !produto.favorite; // reverte estado visual
        console.error('Falha ao favoritar pelo modal', err);
      }
    });
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.cartService.addToCart(produto);
    this.fecharModal();
  }
}
