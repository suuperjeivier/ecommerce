import { Component } from '@angular/core';
import {StyleClassModule} from 'primeng/styleclass';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [RippleModule, ButtonModule, StyleClassModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
