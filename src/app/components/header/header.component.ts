import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedService } from '../../services/sharedProduct/shared.service';
import { CartService } from '../../services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;
  isLoggedIn: boolean = false;
  userEmail: string | null = null;

  constructor(
    private sharedService: SharedService,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartCount = this.cartService.getTotalItemsCount();
    });

    // Escuta mudanças no estado de autenticação
    this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
      if (loggedIn) {
        this.userEmail = this.authService.getUserEmail();
      } else {
        this.userEmail = null;
      }
    });
  }

  selecionarCategoria(categoria: string) {
    console.log('Categoria clicada:', categoria);
    this.sharedService.selecionarCategoria(categoria);
  }

  onBuscar(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.sharedService.buscarPorTermo(valor);
  }

  logout() {
    this.authService.logout();
  }
}
