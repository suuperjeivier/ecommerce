import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cacheable } from 'ts-cacheable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  @Cacheable()
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  @Cacheable()
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}