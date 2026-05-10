import { Component, signal } from '@angular/core';
import { Assignments } from './components/assignments/assignments';
import { AssignmentsTwo } from './components/assignments-two/assignments-two';

@Component({
  selector: 'app-root',
  imports: [AssignmentsTwo, Assignments ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}




