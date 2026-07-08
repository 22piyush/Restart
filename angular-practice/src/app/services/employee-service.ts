import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  api_url = 'https://fakestoreapi.com/products/';

  constructor(private httpClient: HttpClient) {}

  getAllEmployees() {
    return this.httpClient.get(this.api_url);
  }

  getEmployeeById(id: number) {
    return this.httpClient.get(`${this.api_url}${id}`);
  }

  addEmployee(empData: any) {
    return this.httpClient.post(this.api_url, empData);
  }

  updateEmployee(id: number, empData: any) {
    return this.httpClient.patch(`${this.api_url}${id}`, empData);
  }

  deleteEmployee(id: number) {
    return this.httpClient.delete(`${this.api_url}${id}`);
  }
}