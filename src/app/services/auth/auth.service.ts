import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Inicialização básica baseada no LocalStorage para persistir estado ao recarregar
  private loggedInSource = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$: Observable<boolean> = this.loggedInSource.asObservable();

  constructor() { }

  /**
   * Mocka um login armazenando um token fictício no navegador
   */
  login(email: string): void {
    const fakeToken = btoa(email + new Date().getTime());
    localStorage.setItem('auth_token', fakeToken);
    localStorage.setItem('user_email', email);
    this.loggedInSource.next(true); // Avisa ao app que alguém logou
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_email');
    this.loggedInSource.next(false); // Avisa ao app que alguém deslogou
  }

  /**
   * Checa se o usuário atual está autenticado
   */
  isAuthenticated(): boolean {
    return this.hasToken();
  }
  
  getUserEmail(): string | null {
     return localStorage.getItem('user_email');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
