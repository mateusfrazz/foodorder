import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food/food.service';
import { Produto } from '../../Interfaces/Produto';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { CategoriaProdutoService } from '../../services/categoriaProduto/categoria-produto.service';
import { Categoria } from '../../Interfaces/CategoriaProduto';
import { CategoriaItensComponent } from '../categoria-itens/categoria-itens.component';
import { SharedService } from '../../services/sharedProduct/shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent, CategoriaItensComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  produtosMaisVendidos: Produto[] = []; //passando os produtos mais vendidos
  produtosPromocao: Produto[] = []; //passando os produtos em promocao
  categoriaProduto: Categoria[] = [];
  todosProdutos: Produto[] = [];
  categoriaAtual = '';

  //interporlação de textos do template home
  textCategoria =
    'Pedir seu delivery no Bistrô é rápido e prático! Conheça as categorias';
  textMain = ' Mais Vendidos no Bistrô';
  textMainPromocao = 'Promoções Especiais';

  //injetando services
  constructor(
    private foodService: FoodService,
    private categoriaService: CategoriaProdutoService,
    private sharedService: SharedService
  ) {}

  //passsando para o onInit tudo que vai ser renderizado ao carregar a page
  ngOnInit(): void {
    //get dos produtos
    this.foodService.getProdutos().subscribe((dados) => {
      this.todosProdutos = dados;
      this.produtosMaisVendidos = dados.filter(
        (produto) => produto.maisVendido
      );
      this.produtosPromocao = dados.filter((produto) => produto.promocao);
    });

    this.categoriaService.getCategoriaProduto().subscribe((dadosCategoria) => {
      this.categoriaProduto = dadosCategoria;
    });
  }

  //metodo para exibir a porcentagem de desconto
  getDescontoPercentual(
    precoOriginal: number,
    precoComDesconto: number
  ): number {
    if (!precoOriginal || precoOriginal <= 0) return 0;
    const desconto = ((precoOriginal - precoComDesconto) / precoOriginal) * 100;
    return Math.round(desconto);
  }

  onCategoriaSelecionada(categoria: string) {
    console.log('Categoria recebida no HomeComponent:', categoria);
    this.categoriaAtual = categoria;
  }
}
