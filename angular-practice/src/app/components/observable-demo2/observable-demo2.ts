import { Component } from '@angular/core';
import { concatMap, mergeMap } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observable-demo2',
  imports: [CommonModule],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  httpClient = inject(HttpClient);

  ngOnInit() {
    // this.merge_map_demo();
    // this.concap_map();

    this.swithcMap_demo();
  }

  merge_map_demo() {
    let userPublisher = of(1, 2, 3, 4, 5);
    userPublisher
      .pipe(
        mergeMap((userId) => {
          return this.httpClient.get(`https://dummyjson.com/carts/${userId}`);
        }),
      )
      .subscribe((data) => {
        console.log(data);
      });

  }

 concap_map(){

  let userPublisher = of(1, 2, 3, 4, 5);
    userPublisher
      .pipe(
        concatMap((userId) => {
          return this.httpClient.get(`https://dummyjson.com/carts/${userId}`);
        }),
      )
      .subscribe((data) => {
        console.log(data);
      });

 }



  swithcMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5);
    
  }

}
