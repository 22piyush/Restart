import { Component } from '@angular/core';
import userData from './user_data.json';
import data from './product_data'
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  productList = userData;

  p:any;
}
