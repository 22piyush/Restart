import { Component, signal } from '@angular/core';
import { Assignments } from './components/assignments/assignments';
import { AssignmentsTwo } from './components/assignments-two/assignments-two';
import { UserList } from './components/user-list/user-list';
import { ProductList } from './components/product-list/product-list';
import { DataBinding } from './components/data-binding/data-binding';
import { AssignmentThree } from './components/assignment-three/assignment-three';

@Component({
  selector: 'app-root',
  imports: [AssignmentThree, AssignmentsTwo, Assignments , UserList, ProductList, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}




