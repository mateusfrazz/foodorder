import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food/food.service';
import { Produto } from '../../Interfaces/Produto';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { CategoriaProdutoService } from '../../services/categoriaProduto/categoria-produto.service';
import { Categoria } from '../../Interfaces/CategoriaProduto';
import { CategoriaItensComponent } from '../categoria-itens/categoria-itens.component';
import { SharedService } from '../../services/sharedProduct/shared.service';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardProdutoComponent, CategoriaItensComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todosOsProdutos: Produto[] = [];
  produtosMaisVendidos: Produto[] = []; //passando os produtos mais vendidos
  produtosPromocao: Produto[] = []; //passando os produtos em promocao
  produtosDaCategoriaSelecionada: Produto[] = [];

  categoriaAtual = '';
  categoriaProduto: Categoria[] = [];
  private categoriaSubscription!: Subscription;
  
  termoBuscaAtual = '';
  private buscaSubscription!: Subscription;

  isLoading: boolean = false; //feedback de carregamento

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
    this.carregarDadosIniciais();
    this.inscreverNaMudancaDeCategoria();
    this.inscreverNaBusca();

    //get das categorias
    this.categoriaService.getCategoriaProduto().subscribe((dadoCategoria) => {
      this.categoriaProduto = dadoCategoria;
    });
  }

  /**
   * Carrega os dados iniciais que são exibidos por padrão na home.
   * (Mais vendidos, promoções).
   */
  carregarDadosIniciais(): void {
    this.isLoading = true;
    this.foodService.getProdutos().subscribe({
      next: (todosProdutos) => {
        this.todosOsProdutos = todosProdutos; //guardando todos os produtos
        this.produtosMaisVendidos = todosProdutos.filter(
          (produto) => produto.maisVendido
        );
        this.produtosPromocao = todosProdutos.filter(
          (produto) => produto.promocao
        );
        this.isLoading = false;
        console.log('[HomeComponent] dados iniciais carregados');
      },
      error: (err) => {
        console.error('erro ao carregar produtos inciaiis', err);
        this.isLoading = false;
      },
    });
  }

  /**
   * Inscreve-se no SharedService para ouvir mudanças de categoria.
   */

  inscreverNaMudancaDeCategoria(): void {
    this.categoriaSubscription =
      this.sharedService.categoriaSelecionada$.subscribe(
        (categoriaRecebida) => {
          console.log(
            '[HomeComponent] Categoria recebida do SharedService:',
            categoriaRecebida
          );
          // Se a categoria recebida for vazia, pode ser interpretada como "nenhuma seleção" ou "mostrar todos"
          // Vamos tratar string vazia como um reset ou "mostrar tela inicial"
          if (
            !categoriaRecebida ||
            categoriaRecebida.toLowerCase() === 'todos' ||
            categoriaRecebida.trim().toLowerCase() === '' ||
            categoriaRecebida.trim().toLowerCase() === 'home'
          ) {
            this.categoriaAtual = '';
            this.produtosDaCategoriaSelecionada = []; // Limpa produtos da categoria
            console.log(
              '[HomeComponent] Categoria resetada ou "todos". Exibindo tela inicial.'
            );
          } else {
            this.categoriaAtual = categoriaRecebida;
            this.carregarProdutosDaCategoria(categoriaRecebida);
          }
        }
      );
  }

  /**
   * Inscreve-se no SharedService para ouvir digitação na Barra de Busca.
   */
  inscreverNaBusca(): void {
    this.buscaSubscription = this.sharedService.termoDeBusca$.subscribe(
      (termo) => {
        this.termoBuscaAtual = termo;
        
        if (termo && termo.trim().length > 0) {
          // Muda o estado da tela para "Busca"
          this.categoriaAtual = `Busca: ${termo}`;
          this.realizarBuscaInLocal(termo);
        } else {
          // Se limpou o input, volta para Home padrão
          this.sharedService.selecionarCategoria('Home');
        }
      }
    );
  }

  /**
   * Filtra os itens da API localmente pelo Nome ou Descrição
   */
  realizarBuscaInLocal(termo: string): void {
     const t = termo.toLowerCase().trim();
     this.produtosDaCategoriaSelecionada = this.todosOsProdutos.filter(
        // Retorna se o nome do produto ou descrição incluirem o formato de texto
        produto => produto.name.toLowerCase().includes(t) || 
                   (produto.description && produto.description.toLowerCase().includes(t))
     );
  }

  /**
   * Busca produtos da API filtrados pela categoria fornecida.
   * @param categoria A categoria para filtrar.
   */
  carregarProdutosDaCategoria(categoria: string): void {
    this.isLoading = true;
    this.produtosDaCategoriaSelecionada = []; //Limpa antes de carregar novos
    // Usando o método getProdutosPorCategoria adicionado ao FoodService
    this.foodService.getProdutosPorCategoria(categoria).subscribe({
      next: (produtosFiltrados) => {
        this.produtosDaCategoriaSelecionada = produtosFiltrados;
        this.isLoading = false;
        console.log(
          `[HomeComponent] Produtos da categoria '${categoria}' carregados:`,
          produtosFiltrados
        );
      },
      error: (err) => {
        console.error(
          `[HomeComponent] Erro ao carregar produtos da categoria '${categoria}':`,
          err
        );
        this.produtosDaCategoriaSelecionada = [];
        this.isLoading = false;
      },
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

  //Metodo para lidar com clique no icone favorito do ProdutoCard
  alternarFavorito(produto: Produto): void {
    const estadoAnterior = produto.favorite;
    produto.favorite = !produto.favorite;

    this.foodService.updateProduto(produto).subscribe({
      next: (produtoAtualizado) => {
        console.log(`Produto ${produto.name} salvo com sucesso. Favorito: ${produto.favorite}`);
        
        // Se a gente tiver visualizando a aba 'Favoritos' e o produto for desfavoritado, 
        // remove ele temporariamente da tela para dar o feedback visual
        if (this.categoriaAtual.toLowerCase() === 'favoritos' && !produtoAtualizado.favorite) {
          this.produtosDaCategoriaSelecionada = this.produtosDaCategoriaSelecionada.filter(
            p => p.id !== produto.id
          );
        }
      },
      error: (err) => {
        console.error('Erro ao atualizar produto', err);
        produto.favorite = estadoAnterior; // Reverte se falhar
      }
    });
  }

  ngOnDestroy(): void {
    if (this.categoriaSubscription) {
      this.categoriaSubscription.unsubscribe();
      console.log(
        '[HomeComponent] Inscrição de categoria (SharedService) cancelada.'
      );
    }
    
    if (this.buscaSubscription) {
       this.buscaSubscription.unsubscribe();
    }
  }
}
