import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {

  employeeService = inject(EmployeeService);
  employees$: any;

 
  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
   
  }

}
