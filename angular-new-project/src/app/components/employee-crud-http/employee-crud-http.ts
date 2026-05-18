import { Component, inject } from '@angular/core';
import { EmployeeServiceHttp } from '../../services/employee-service-http';

@Component({
  selector: 'app-employee-crud-http',
  imports: [],
  templateUrl: './employee-crud-http.html',
  styleUrl: './employee-crud-http.css',
})
export class EmployeeCrudHttp {

  employeeService = inject(EmployeeServiceHttp)

  

}
