import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  inputs: ['userName', 'userAge'],
})
export class Child {
  userName!: string;
  userAge!: number;
}
