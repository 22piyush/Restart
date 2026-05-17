import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  inputs: ['employees'],
})
export class EmployeeAdd {
  name = '';
  department = '';
  employees: any;

  @Output() addEmp = new EventEmitter();

  addEmployee() {
    this.addEmp.emit({
      name: this.name,
      department: this.department,
    });
  }
}
