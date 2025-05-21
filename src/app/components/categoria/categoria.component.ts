import {
  Component,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { CategoriaItensComponent } from '../categoria-itens/categoria-itens.component';
import { Produto } from '../../Interfaces/Produto';
import { FoodService } from '../../services/food/food.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, CategoriaItensComponent, CardProdutoComponent],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnChanges, OnInit {
  @Input() categoria: string = '';
  allProducts: Produto[] = [];
  produtos: Produto[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodService.getProdutos().subscribe((dadoProduto) => {
      this.allProducts = dadoProduto;
    });
    this.filtrarProdutos();
  }

  ngOnChanges(): void {
    this.produtos = this.allProducts.filter(
      (p) => p.category === this.categoria
    );
    this.filtrarProdutos();
  }

  filtrarProdutos(): void {
    if (this.categoria && this.allProducts.length > 0) {
      this.produtos = this.allProducts.filter(
        (p) => p.category.toLowerCase() === this.categoria.toLowerCase()
      );
    }
  }
}
