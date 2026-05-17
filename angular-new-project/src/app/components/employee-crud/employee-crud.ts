import { Component } from '@angular/core';
import { EmployeeAdd } from '../employee-add/employee-add';

@Component({
  selector: 'app-employee-crud',
  imports: [EmployeeAdd],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  employees = [
    {
      name: 'piyush',
      department: 'IT',
    },
  ];

  employeeAdd(emp: any) {
    this.employees.push(emp);
  }

  deleteEmp(emp: any) {
     this.employees = this.employees.filter(item => item.name !== emp.name);
  }
}
