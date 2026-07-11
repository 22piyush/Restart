import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  inputs: ['userName', 'userAge', 'emp', 'students'],
  outputs: ['messageEvent'],
})
export class Child {
  userName!: string;
  userAge!: number;
  emp!: any;
  students: string[] = [];

  messageEvent = new EventEmitter<any>();

  employee = {
    id: 1,
    name: 'Piyush',
  };

  sendMessage() {
    this.messageEvent.emit(this.employee);
  }

  displayMessage() {
    alert('Hello From Child');
  }

  show() {
    console.log(this.userName);
  }
}
