import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatFormFieldModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() categoriaSelecionada = new EventEmitter<string>();

  selecionarCategoria(categoria: string) {
    console.log('Categoria clicada:', categoria);
    this.categoriaSelecionada.emit(categoria);
  }
}
