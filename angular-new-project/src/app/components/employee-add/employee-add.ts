import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.css',
  outputs: ['addEmp'],
})
export class EmployeeAdd {
  addEmp = new EventEmitter<number>();

  employee: any = {
    firstName: '',
    lastName: '',
    email: '',
  };

  addEmployee() {
    this.addEmp.emit(this.employee);
  }
}
