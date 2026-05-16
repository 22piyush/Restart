import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule, CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  num: number = 2;

  courseArr = ['Angular', 'React', 'dev'];

  employees = [
    {
      id: 1,
      name: 'Piyush',
      gender: 'Male',
      salary: 45000,
      department: 'IT',
    },
    {
      id: 2,
      name: 'Rahul',
      gender: 'Male',
      salary: 52000,
      department: 'HR',
    },
    {
      id: 3,
      name: 'Sneha',
      gender: 'Female',
      salary: 60000,
      department: 'Finance',
    },
    {
      id: 4,
      name: 'Aman',
      gender: 'Male',
      salary: 47000,
      department: 'Marketing',
    },
    {
      id: 5,
      name: 'Priya',
      gender: 'Female',
      salary: 75000,
      department: 'IT',
    },
  ];
}
