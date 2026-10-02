import { Component } from '@angular/core';
import { ServiceComponent } from '../components/service-component/service-component';
import { HttpDemo1 } from '../components/http-demo1/http-demo1';
import { EmployeeCrud } from '../components/employee-crud/employee-crud';

@Component({
  selector: 'app-body',
  imports: [ServiceComponent, HttpDemo1, EmployeeCrud],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
  