import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataViewModule } from 'primeng/dataview';
import {TagModule} from 'primeng/tag';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { StepperModule } from 'primeng/stepper';
import {PanelModule} from 'primeng/panel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [DataViewModule, TagModule, ButtonModule, CommonModule,
     ImageModule, TableModule, RatingModule, FormsModule, InputNumberModule, StepperModule, PanelModule]
})
export class CartComponent implements OnInit {
  items: any[] = [];
  totalQuantity: number = 0;
  activeStep: number = 1;
  address: string = '';
  city: string = '';
  zip: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
    this.totalQuantity = this.cartService.getTotalQuantity();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  products() {
    return this.cartService.getCartItems();
  }

  addToCart(product: any): void {
   this.cartService.addToCart(product);
  }

  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warn';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return 'success';
    }
  }
}
