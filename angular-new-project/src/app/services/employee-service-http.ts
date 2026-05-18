import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceHttp {
  HttpClient = inject(HttpClient);
  api_url = 'http://localhost:3000/';

  getAllEmployees() {
    return this.HttpClient.get(this.api_url);
  }

  getAllEmployeesByID(id: any) {
    return this.HttpClient.get(`${this.api_url}/${id}`);
  }

  addEmployee(empData: any) {
    return this.HttpClient.post(this.api_url, empData);
  }

  updateEmployeesByID(id: any, empData: any) {
    return this.HttpClient.put(`${this.api_url}/${id}`, empData);
  }

  deleteEmployee(id: any) {
    return this.HttpClient.delete(`${this.api_url}/${id}`);
  }
}
