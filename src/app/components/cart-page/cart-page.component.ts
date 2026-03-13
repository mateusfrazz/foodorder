import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../Interfaces/CartItem';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  changeQuantity(produtoId: number, currentQuantity: number, change: number): void {
    this.cartService.changeQuantity(produtoId, currentQuantity + change);
  }

  removeItem(produtoId: number): void {
    this.cartService.removeFromCart(produtoId);
  }

  clearCart(): void {
    if(confirm('Tem certeza que deseja esvaziar o carrinho?')) {
      this.cartService.clearCart();
    }
  }

  checkout(): void {
    alert('Funcionalidade de Checkout a ser implementada!');
  }
}
