import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  templateUrl: './http-demo1.html',
  imports:[FormsModule, CommonModule]
})
export class HttpDemo1 {

  employeeService = inject(EmployeeService);

  employees$!: Observable<any[]>;

  employee = {
    id: 0,
    title: '',
    price: 0,
    category: ''
  };

  isEdit = false;

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employees$ = this.employeeService.getAllEmployees();
  }

  saveEmployee() {

    if (this.isEdit) {

      this.employeeService
      .updateEmployee(this.employee.id, this.employee)
      .subscribe(() => {

        alert('Updated');

        this.fetchEmployees();

        this.resetForm();

      });

    } else {

      this.employeeService
      .addEmployee(this.employee)
      .subscribe(() => {

        alert('Added');

        this.fetchEmployees();

        this.resetForm();

      });

    }

  }

  editEmployee(emp:any){

    this.employee = {...emp};

    this.isEdit = true;

  }

  deleteEmployee(id:number){

    // if(confirm('Delete Employee?')){

      this.employeeService.deleteEmployee(id)
      .subscribe(()=>{

        // alert('Deleted');

        // this.fetchEmployees();

      });

    // }

    
  }

  resetForm(){

    this.employee = {

      id:0,

      title:'',

      price:0,

      category:''

    };

    this.isEdit = false;

  }

}