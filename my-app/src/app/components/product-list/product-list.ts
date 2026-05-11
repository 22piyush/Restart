import { Component } from '@angular/core';
import productData from './product_data';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  productArr = productData;

}
