import { Component } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth',
  imports: [CheckboxModule, PasswordModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  value: string;
  isLoggingIn: boolean = false;
  userPassword: string;
  userEmailAddress: string;
  authUserToken: string;

  constructor(private authService: AuthService) { 
    this.value = '';
    this.userPassword = '';
    this.userEmailAddress = '';
    this.authUserToken = '';
  }

  ngOnInit(): void {
    this.isLoggingIn = false;
  }

  login = () => {
    console.log('Logging in...');
    
    this.isLoggingIn = true;
    const data: any = {
      username: this.userEmailAddress,
      password: this.userPassword
    };
    this.authService.login(data).subscribe((data: any) => {
      this.authUserToken = data;
      this.isLoggingIn = false;
    });
  }

}
