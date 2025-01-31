import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private API_URL = 'https://fakestoreapi.com'; // Replace with your API endpoint


  constructor(private http: HttpClient) {
   }

  getUser(): Observable<any> {
    return this.http.get(`${this.API_URL}/user`);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/login`, data);
  }
}
