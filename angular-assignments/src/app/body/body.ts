import { Component } from '@angular/core';
import { AssignmentOne } from '../components/assignment-one/assignment-one';

@Component({
  selector: 'app-body',
  imports: [AssignmentOne],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
