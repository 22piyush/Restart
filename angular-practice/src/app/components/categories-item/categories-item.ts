import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-item',
  standalone: true,
  imports: [],
  templateUrl: './categories-item.html',
  styleUrl: './categories-item.css',
  inputs: ['categoryObj'],
})
export class CategoriesItem {
  categoryObj: any;
}
