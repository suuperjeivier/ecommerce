import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(product: any): void {
    this.cartItems.push(product);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  removeFromCart(product: any): void {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
  }

  clearCart(): any[] {
    this.cartItems = [];
    return this.cartItems;
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}