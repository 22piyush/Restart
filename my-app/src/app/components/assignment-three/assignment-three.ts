import { Component } from '@angular/core';
import * as empData from './user_data.json';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'awesome-snackbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment-three',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './assignment-three.html',
  styleUrl: './assignment-three.css',
})
export class AssignmentThree {
  empArr = (empData as any).default;

  deleteIcon = faTrash;
  editIcon = faPenToSquare;
  viewIcon = faEye;

  selectedEmployee: any;
  showModel: boolean = false;
  showViewModel: boolean = false;
  showEmpModel: boolean = false;

  employee = {
    name: '',
    username: '',
    email: '',
  };

  addEmployee() {
    const newEmp = {
      id: this.empArr.length + 1,
      name: this.employee.name,
      username: this.employee.username,
      email: this.employee.email,
    };

    this.empArr.push(newEmp);

    // reset form
    this.employee = {
      name: '',
      username: '',
      email: '',
    };
  }

  openEmpBox(data: any, type: string) {
    this.selectedEmployee = data;
    if (type == 'delete') {
      this.showViewModel = false;
      this.showModel = true;
    } else {
      this.showModel = false;
      this.showViewModel = true;
    }
  }

  confirmDelete() {
    this.empArr = this.empArr.filter((e: any) => e.email !== this.selectedEmployee.email);

    this.showModel = false;

    new Snackbar('Employee deleted successfully');
  }

  cancelDelete() {
    this.showModel = false;
    this.showViewModel = false;
    this.showEmpModel = false;
  }
}
