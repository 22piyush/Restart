import { Component } from '@angular/core';
import { EmployeeCrud } from '../components/employee-crud/employee-crud';

@Component({
  selector: 'app-body',
  imports: [EmployeeCrud],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
