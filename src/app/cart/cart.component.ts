import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataViewModule } from 'primeng/dataview';
import {TagModule} from 'primeng/tag';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [DataViewModule, TagModule, ButtonModule, CommonModule, ImageModule]
})
export class CartComponent implements OnInit {
  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  products() {
    return this.cartService.getCartItems();
  }
}
