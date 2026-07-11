import { Component, ViewChild } from '@angular/core';
import { Child } from '../child/child';

@Component({
  standalone: true,
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  name = 'Piyush';
  age = 21;
  employee = {
    id: 101,
    name: 'Piyush',
    salary: 50000,
  };
  students = ['Rahul', 'Amit', 'Piyush'];

  // Child Data
  message: any = {};
  receiveMessage(msg: any) {
    this.message = msg;
  }

  @ViewChild(Child)
  child!: Child;

  callChild() {
    this.child.displayMessage();

     this.child.show();
  }
}
