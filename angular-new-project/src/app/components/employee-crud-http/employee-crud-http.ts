import { Component, inject } from '@angular/core';
import { EmployeeServiceHttp } from '../../services/employee-service-http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-crud-http',
  imports: [CommonModule],
  templateUrl: './employee-crud-http.html',
  styleUrl: './employee-crud-http.css',
})
export class EmployeeCrudHttp {
  employeeService = inject(EmployeeServiceHttp);
  employees$: Observable<any> | undefined;

  fetchEmployees() {
    this.employees$ = this.employeeService.getAllEmployees();
    console.log(this.employees$);
  }

  deleteEmp(empid: any) {
    const isConfirmed = confirm('Are you sure to delete');
    if (isConfirmed) {
      this.employeeService
        .deleteEmployee(empid)
        .subscribe((res) => alert(`Employee with id ${empid} is deleted successfully`));

      this.fetchEmployees();
    }
  }

  addEmp(firstName: any, lastName: any, email: any, gender: any,) {
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
    };

    this.employeeService.addEmployee(newEmployee).subscribe(() => {
      alert('Employee Added Successfully.');
    });
  }
}
