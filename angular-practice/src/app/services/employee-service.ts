import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  httpClient = inject(HttpClient);
  api_url = 'https://jsonplaceholder.typicode.com/users';

  getAllEmployees() {
    return this.httpClient.get(this.api_url);
  }

  getEmployeeById(id: any){
    return this.httpClient.get(`${this.api_url}/${id}`);
  }
  
  addEmployee(empData: any){
    return this.httpClient.post(this.api_url, empData);
  }

  updateEmployee(id: any, empData: any){
    return this.httpClient.put(`${this.api_url}/${id}`, empData);
  }

  deleteEmployee(id: any){
    return this.httpClient.delete(`${this.api_url}/${id}`);
  }

}
