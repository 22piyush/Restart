import { Component } from '@angular/core';
import { DataBinding } from '../../components/data-binding/data-binding';
import { Directives } from '../../components/directives/directives';
import { UserList } from '../../components/user-list/user-list';

@Component({
  selector: 'app-body',
  imports: [DataBinding, Directives, UserList],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
