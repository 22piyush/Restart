import { Component } from '@angular/core';
import { EmployeeTable } from '../employee-table/employee-table';
import { EmployeeAdd } from '../employee-add/employee-add';

@Component({
  selector: 'app-employee-crud',
  imports: [EmployeeTable, EmployeeAdd],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {

  employees:any = [
    {
      id:1,
      firstName:'Piyush',
      lastName:'Aglawe',
      email:'piyush@gmail.com'
    },
    {
      id:2,
      firstName:'Rahul',
      lastName:'Patil',
      email:'rahul@gmail.com'
    }
  ];

  addEmployee(emp:any){
    this.employees.push({
      id:this.employees.length + 1,
      ...emp
    });
  }

  deleteEmployee(id:number){
    this.employees = this.employees.filter(
      (emp:any)=> emp.id !== id
    );
  }

}