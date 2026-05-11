import { Component } from '@angular/core';
import productData from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { InputColorDirective } from '../../directives/input-color';

@Component({
  selector: 'app-product-list',
  imports: [FontAwesomeModule, NgxPaginationModule, FormsModule,InputColorDirective],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = productData;
  faStar = faStar;
  faIndianRupeeSign = faIndianRupeeSign;
  page: number = 1;

  searchText: string = '';

  filteredProductsList() {
    return this.productArr.filter((product: any) =>
      product.title.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }

  openSwwetAlert() {
    Swal.fire('Good job', 'You clicked the button', 'success');
  }

   openSnackbar() {

    new Snackbar('Success Message', {
      position: 'top-right',
      theme: 'success',
    });

  }
}
