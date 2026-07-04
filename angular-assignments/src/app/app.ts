import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeTable } from './components/employee-table/employee-table';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule, EmployeeTable],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  employees = [
    {
      id: 101,
      name: 'Piyush Aglawe',
      email: 'piyush@gmail.com',
      department: 'IT',
      designation: 'Software Engineer',
      salary: 60000,
      city: 'Pune',
    },
    {
      id: 102,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      department: 'HR',
      designation: 'HR Executive',
      salary: 45000,
      city: 'Mumbai',
    },
    {
      id: 103,
      name: 'Amit Verma',
      email: 'amit@gmail.com',
      department: 'Finance',
      designation: 'Accountant',
      salary: 50000,
      city: 'Nagpur',
    },
    {
      id: 104,
      name: 'Sneha Patil',
      email: 'sneha@gmail.com',
      department: 'Marketing',
      designation: 'Marketing Executive',
      salary: 55000,
      city: 'Nashik',
    },
    {
      id: 105,
      name: 'Neha Gupta',
      email: 'neha@gmail.com',
      department: 'Sales',
      designation: 'Sales Manager',
      salary: 70000,
      city: 'Delhi',
    },
  ];

  deleteEmployee(id: any) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }

  addEmployee(emp: any) {
    this.employees.push(emp);
  }
}
