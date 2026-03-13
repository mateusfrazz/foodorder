import { Produto } from './Produto';

export interface CartItem {
  produto: Produto;
  quantidade: number;
  precoTotal: number;
}
