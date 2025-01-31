import { Component, OnInit} from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  imports: [BadgeModule, MenubarModule, CommonModule, AvatarModule, RouterModule, DrawerModule, CartComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  isAuthenticated: boolean;
  visibleSidebar1: boolean;

  constructor() { 
    this.items = [];
    this.isAuthenticated = false;
    this.visibleSidebar1 = false;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home', icon: 'pi pi-home', route: ['/']
      },
      {
        label: 'Products', icon: 'pi pi-cart-minus', route: ['/products']
      },
      {
        label: 'About Us', icon: 'pi pi-info-circle', route: ['/about']
      },
      {
        label: 'Contact', icon: 'pi pi-envelope', route: ['/contact']
      },
      {
        label: 'Carrito Grande', icon: 'pi pi-user', route: ['/cart']
      }
    ];
  }

}
