import { Component } from '@angular/core';
import * as empData from './user_data.json';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-assignment-three',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './assignment-three.html',
  styleUrl: './assignment-three.css',
})
export class AssignmentThree {
  empArr = (empData as any).default;

  deleteIcon = faTrash;
  editIcon = faPenToSquare;
  viewIcon = faEye;

  showModel:boolean = false

  filterEmployee(data: any) {
    this.empArr = this.empArr.filter((e: any) => e.email !== data.email);
  }
}
