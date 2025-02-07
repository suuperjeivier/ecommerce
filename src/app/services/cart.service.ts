import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private totalQuantity: number = 0;

  addToCart(product: any): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.getTotalQuantity();
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  removeFromCart(product: any): void {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
    this.getTotalQuantity();
  }

  clearCart(): any[] {
    this.cartItems = [];
    this.getTotalQuantity();
    return this.cartItems;
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  getTotalQuantity(): number {
    return this.totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}