import { Component } from '@angular/core';
import userData from './user_data.json';
import data from './product_data'

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  productList = userData;
}
