import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from '../../Interfaces/Produto';
import { CartItem } from '../../Interfaces/CartItem';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  
  // Usamos BehaviorSubject para emitir as atualizações em tempo real para os componentes (Header/badge, CartPage)
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartSubject.asObservable();

  constructor(private snackBar: MatSnackBar) {
    this.loadFromLocalStorage();
  }

  // Obter itens atuais do carrinho
  getCart(): CartItem[] {
    return this.cartItems;
  }

  // Notifica todos inscritos que houve mudança
  private notifyChanges(): void {
    this.cartSubject.next([...this.cartItems]);
    this.saveToLocalStorage();
  }

  // Adicionar um produto ao carrinho
  addToCart(produto: Produto): void {
    const existingItem = this.cartItems.find(item => item.produto.id === produto.id);

    // Calcular qual valor considerar (Promoção vs Original)
    const precoConsiderado = produto.promocao ? produto.valorPromocional : produto.price;

    if (existingItem) {
      existingItem.quantidade += 1;
      existingItem.precoTotal = existingItem.quantidade * precoConsiderado;
    } else {
      this.cartItems.push({
        produto,
        quantidade: 1,
        precoTotal: precoConsiderado
      });
    }

    this.notifyChanges();
    
    this.snackBar.open(`${produto.name} adicionado ao carrinho!`, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['success-snackbar']
    });
  }

  // Remover um item totalmente
  removeFromCart(produtoId: number): void {
    this.cartItems = this.cartItems.filter(item => item.produto.id !== produtoId);
    this.notifyChanges();
  }

  // Alterar a quantidade de um item
  changeQuantity(produtoId: number, quantidade: number): void {
    const item = this.cartItems.find(item => item.produto.id === produtoId);
    
    if (!item) return;

    if (quantidade <= 0) {
      this.removeFromCart(produtoId);
    } else {
      item.quantidade = quantidade;
      const precoConsiderado = item.produto.promocao ? item.produto.valorPromocional : item.produto.price;
      item.precoTotal = item.quantidade * precoConsiderado;
      this.notifyChanges();
    }
  }

  // Obter o valor total da compra
  getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + item.precoTotal, 0);
  }

  // Obter o número total de itens (Quantity) no carrinho
  getTotalItemsCount(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantidade, 0);
  }

  // Limpar Carrinho
  clearCart(): void {
    this.cartItems = [];
    this.notifyChanges();
  }

  // --- Local Storage Management ---
  private saveToLocalStorage(): void {
    if(typeof localStorage !== 'undefined'){
      localStorage.setItem('Cart', JSON.stringify(this.cartItems));
    }
  }

  private loadFromLocalStorage(): void {
    if(typeof localStorage !== 'undefined'){
      const cartJson = localStorage.getItem('Cart');
      if (cartJson) {
        this.cartItems = JSON.parse(cartJson);
        this.cartSubject.next(this.cartItems);
      }
    }
  }
}
