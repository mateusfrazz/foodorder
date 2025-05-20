import {
  Component,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaProdutoService } from '../../services/categoriaProduto/categoria-produto.service';
import { Categoria } from '../../Interfaces/CategoriaProduto';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { CategoriaItensComponent } from '../categoria-itens/categoria-itens.component';
import { Produto } from '../../Interfaces/Produto';
import { FoodService } from '../../services/food/food.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, CategoriaItensComponent],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
})
export class CategoriaComponent implements OnChanges, OnInit {
  @Input() categoria: string[] = [];
  allProducts: Produto[] = [];
  produtos: Produto[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodService.getProdutos().subscribe((dadoProduto) => {
      this.allProducts = dadoProduto;
    });
  }

  ngOnChanges(): void {
    this.produtos = this.allProducts.filter(
      (p) => p.category === this.categoria
    );
  }
}
