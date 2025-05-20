import { Component, Input } from '@angular/core';
import { Produto } from '../../Interfaces/Produto';

@Component({
  selector: 'app-categoria-produto',
  imports: [],
  templateUrl: './categoria-produto.component.html',
  styleUrl: './categoria-produto.component.css',
})
export class CategoriaProdutoComponent {
  @Input() produto!: Produto;
}
