import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria } from '../../Interfaces/CategoriaProduto';
import { SharedService } from '../../services/sharedProduct/shared.service';

@Component({
  selector: 'app-categoria-itens',
  imports: [CommonModule],
  templateUrl: './categoria-itens.component.html',
  styleUrl: './categoria-itens.component.css',
})
export class CategoriaItensComponent {
  @Input() categoria!: Categoria;
  constructor(private sharedService: SharedService) {}

  selecionarCategoriaAtual(categoria: string): void {
    console.log('[categoria-item-component] Categoria selecionada:', categoria);
    this.sharedService.selecionarCategoria(categoria);
  }
}
