import { Component } from '@angular/core';
import { Category } from '../../components/category/category';
import { EmployeeCrud } from '../../components/employee-crud/employee-crud';
import { DataBinding } from '../../components/data-binding/data-binding';

@Component({
  selector: 'app-body',
  imports: [Category, EmployeeCrud, DataBinding],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
