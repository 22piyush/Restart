import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'electronics.jpg',
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'fashion.jpg',
    },
    {
      id: 3,
      name: 'Home & Kitchen',
      image: 'home-kitchen.jpg',
    },
    {
      id: 4,
      name: 'Books',
      image: 'books.jpg',
    },
    {
      id: 5,
      name: 'Sports',
      image: 'sports.jpg',
    },
    {
      id: 6,
      name: 'Beauty',
      image: 'beauty.jpg',
    },
    {
      id: 7,
      name: 'Toys',
      image: 'toys.jpg',
    },
    {
      id: 8,
      name: 'Automobiles',
      image: 'automobiles.jpg',
    },
    {
      id: 9,
      name: 'Groceries',
      image: 'groceries.jpg',
    },
    {
      id: 10,
      name: 'Health',
      image: 'health.jpg',
    },
  ];
}
