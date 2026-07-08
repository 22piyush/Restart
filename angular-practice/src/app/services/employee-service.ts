import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  api_url = 'https://fakestoreapi.com/products/';

  getAllEmployees() {
    return this.httpClient.get(this.api_url);
  }

  getEmployeeById(id: any) {
    return this.httpClient.get(`${this.api_url}${id}`);
  }

  addEmployee(empData: any) {
    return this.httpClient.post(this.api_url, empData);
  }

  updateEmployee(id: any, empData: any) {
    return this.httpClient.patch(`${this.api_url}${id}`, empData);
  }

  deleteEmployee(id: any) {
    return this.httpClient.delete(`${this.api_url}${id}`);
  }
}
