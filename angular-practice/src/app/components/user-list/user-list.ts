import { Component } from '@angular/core';
import * as data from './user_data.json';
import employee from './employee';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-user-list',
  imports: [NgxPaginationModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  userArr = (data as any).default;
  empArr = employee;
  p: number = 1;
}
