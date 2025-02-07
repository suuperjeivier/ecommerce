import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';
import { AppComponent } from '../../app.component';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  imports: [CommonModule, ChipModule, ImageModule],
  providers: [AppComponent]
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartComponent: CartComponent,
    private appService: AppComponent
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(+id).subscribe(data => {
        this.product = data;
      });
    }
  }

  addToCart(product: any) {
    this.cartComponent.addToCart(product);
    
    this.appService.showSuccess('Product added to cart');
    
  }
}