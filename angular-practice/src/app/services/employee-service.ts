import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  httpClient = inject(HttpClient);
  api_url = 'https://jsonplaceholder.typicode.com/users';

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient
      .get(this.api_url)
      .pipe(map((data: any) => data.map((empData: any) => new Employee(empData))));
  }

  getEmployeeById(id: any) {
    return this.httpClient.get(`${this.api_url}/${id}`);
  }

  addEmployee(empData: any) {
    return this.httpClient.post(this.api_url, empData);
  }

  updateEmployee(id: any, empData: any) {
    return this.httpClient.put(`${this.api_url}/${id}`, empData);
  }

  deleteEmployee(id: any) {
    return this.httpClient.delete(`${this.api_url}/${id}`);
  }
}
