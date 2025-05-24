import { Component, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedService } from '../../services/sharedProduct/shared.service';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatFormFieldModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private sharedService: SharedService) {}

  selecionarCategoria(categoria: string) {
    console.log('Categoria clicada:', categoria);
    this.sharedService.selecionarCategoria(categoria);
  }
}
