import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food/food.service';
import { Produto } from '../../Interfaces/Produto';
import { CardProdutoComponent } from "../card-produto/card-produto.component";
import { CategoriaProdutoService } from '../../services/categoriaProduto/categoria-produto.service';
import { Categoria } from '../../Interfaces/CategoriaProduto';
import { CategoriaItensComponent } from '../categoria-itens/categoria-itens.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    CommonModule,
    CardProdutoComponent,
    CategoriaItensComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = []
  categoriaProduto: Categoria[] = []
 

  constructor( 
    private foodService: FoodService,
    private categoriaService: CategoriaProdutoService
  ){}
  ngOnInit(): void {
    //get dos produtos mais vendidos
    this.foodService.getProdutos().subscribe((dado) => {
      this.produtos = dado.filter(produto => produto.maisVendido === true);
    });

     //get das categorias
     this.categoriaService.getCategoriaProduto().subscribe((dado)=>{
      this.categoriaProduto = dado;
      console.log(dado)
     });

     //get produtos em promocao 
     
   
  }
}
