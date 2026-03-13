import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    snackBar.open('Faça login para acessar o carrinho de compras.', 'X', {
       duration: 3500,
       horizontalPosition: 'center',
       verticalPosition: 'bottom',
    });
    router.navigate(['/login']); // Redireciona para o componente de Login
    return false;
  }
};
