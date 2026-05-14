import { Component } from '@angular/core';
import { Category } from '../../components/category/category';
import { EmployeeCrud } from '../../components/employee-crud/employee-crud';

@Component({
  selector: 'app-body',
  imports: [Category, EmployeeCrud],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
