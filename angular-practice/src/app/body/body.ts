import { Component } from '@angular/core';
import { DataBinding } from '../components/data-binding/data-binding';
import { DirectivesDemo } from '../components/directives-demo/directives-demo';
import { UserList } from '../components/user-list/user-list';

@Component({
  selector: 'app-body',
  imports: [DataBinding, DirectivesDemo, UserList],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
