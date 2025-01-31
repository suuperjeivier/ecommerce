import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BadgeModule,
    AvatarModule,
    MenubarModule,
    CommonModule,
    RouterModule
  ],
  providers: [AuthService],
  bootstrap: []
})
export class AppModule { }
