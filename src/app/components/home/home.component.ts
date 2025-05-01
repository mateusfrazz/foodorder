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
  produtosMaisVendidos: Produto[] = [] //passando os produtos mais vendidos
  produtosPromocao: Produto[] =[] //passando os produtos em promocao
  categoriaProduto: Categoria[] = []
 

  constructor( 
    private foodService: FoodService,
    private categoriaService: CategoriaProdutoService
  ){}
  ngOnInit(): void {

    //get dos produtos mais vendidos
    this.foodService.getProdutos().subscribe((dado) => {
       this.produtosMaisVendidos = dado.filter(produto => produto.maisVendido);
       this.produtosPromocao = dado.filter(produto => produto.promocao);
    });

    //get dos produtos em promocao 
    this.foodService.getProdutos().subscribe((dadoProduto) => {
       this.produtosPromocao = dadoProduto.filter(produto => produto.promocao);
       console.log(this.produtosPromocao)
    })

     //get das categorias
      this.categoriaService.getCategoriaProduto().subscribe((dadoCategoria)=>{
         this.categoriaProduto = dadoCategoria;
  
     });

     
   
  }
}
