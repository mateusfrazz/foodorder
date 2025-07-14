import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedService } from '../../services/sharedProduct/shared.service';
import { FavoritosService } from '../../services/favoritosService/favoritos.service';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatFormFieldModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private sharedService: SharedService,
    private favoritosService: FavoritosService
  ) {}

  selecionarCategoria(categoria: string) {
    console.log('Categoria clicada:', categoria);
    this.sharedService.selecionarCategoria(categoria);
  }

  viewFavoritos(favorito: string) {
    console.log('[headerComponent] Favoritos clicado');
    this.favoritosService.viewFavoritos(favorito);
  }
}
