import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.mergeMap_demo();

    this.concatMap_demo();
  }

  mergeMap_demo() {
    let cartPublisher = of(1, 2, 3, 4, 5);

    cartPublisher
      .pipe(
        mergeMap((cartId) => {
          return this.httpClient.get(`https://fakestoreapi.com/carts/${cartId}`);
        }),
      )
      .subscribe({
        next: (cartResponse) => {
          console.log(cartResponse);
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          console.log('All API calls completed');
        },
      });
  }

  concatMap_demo() {
    let cartPublisher = of(1, 2, 3, 4, 5);

    cartPublisher
      .pipe(
        concatMap((cartId) => {
          return this.httpClient.get(`https://fakestoreapi.com/carts/${cartId}`);
        }),
      )
      .subscribe({
        next: (cartResponse) => {
          console.log(cartResponse);
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          console.log('All API calls completed');
        },
      });
  }

  searchData(){
    
  }
}
