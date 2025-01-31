import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import {TagModule} from 'primeng/tag';
import {ButtonModule} from 'primeng/button';
import {SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import {SkeletonModule} from 'primeng/skeleton';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, RouterModule, DataViewModule, TagModule, ButtonModule, SelectButtonModule, CarouselModule, FormsModule, SkeletonModule]
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  layout: 'list' | 'grid' = 'list';
  options: any[] = [`list`, `grid`];
  isLoading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.isLoading = false;
    });
  }
}