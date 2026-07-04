import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
})
export class EmployeeAdd {
  @Output()
  addEmp = new EventEmitter<any>();

  newEmployee = {
    id: 0,
    name: '',
    email: '',
    department: '',
    designation: '',
    salary: 0,
    city: '',
  };

  addEmployee() {
    this.addEmp.emit({ ...this.newEmployee });

    this.newEmployee = {
      id: 0,
      name: '',
      email: '',
      department: '',
      designation: '',
      salary: 0,
      city: '',
    };
  }
}
