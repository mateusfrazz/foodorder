import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../Interfaces/Produto';

@Component({
  selector: 'app-card-produto',
  imports: [
    CommonModule,
  ],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
   @Input() produto!:Produto;
}
