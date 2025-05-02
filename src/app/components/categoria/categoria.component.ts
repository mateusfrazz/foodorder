import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaProdutoService } from '../../services/categoriaProduto/categoria-produto.service';
import { Categoria } from '../../Interfaces/CategoriaProduto';
import { CardProdutoComponent } from "../card-produto/card-produto.component";
import { CategoriaItensComponent } from "../categoria-itens/categoria-itens.component";

@Component({
  selector: 'app-categoria',
  standalone:true,
  imports: [
    CommonModule,
    CategoriaItensComponent,
    CardProdutoComponent
],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {
     categoriaProduto: Categoria[] = []

     constructor( private categoriaService: CategoriaProdutoService){}
     ngOnInit(): void {
       this.categoriaService.getCategoriaProduto().subscribe((dado)=>{
        this.categoriaProduto = dado;
        console.log(dado)
       })
     }
}
