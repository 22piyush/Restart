import { Component, signal } from '@angular/core';
import { Assignments } from './components/assignments/assignments';
import { AssignmentsTwo } from './components/assignments-two/assignments-two';
import { UserList } from './components/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [AssignmentsTwo, Assignments , UserList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}




