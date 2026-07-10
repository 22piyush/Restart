import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private api_url = 'https://fakestoreapi.com/products/';

  constructor(private httpClient: HttpClient) {}

  // GET All
  getAllEmployees(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.api_url);
  }

  // GET By Id
  getEmployeeById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.api_url}${id}`);
  }

  // POST
  addEmployee(empData: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.api_url, empData);
  }

  // PUT
  updateEmployee(id: number, empData: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.api_url}${id}`, empData);
  }

  // DELETE
  deleteEmployee(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.api_url}${id}`);
  }
}
