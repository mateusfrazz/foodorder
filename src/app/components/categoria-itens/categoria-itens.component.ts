import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria } from '../../Interfaces/CategoriaProduto';

@Component({
  selector: 'app-categoria-itens',
  imports: [
    CommonModule
  ],
  templateUrl: './categoria-itens.component.html',
  styleUrl: './categoria-itens.component.css'
})
export class CategoriaItensComponent {
      @Input() categoria!:Categoria;
}
