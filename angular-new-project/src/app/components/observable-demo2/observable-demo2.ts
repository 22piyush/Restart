import { Component, inject } from '@angular/core';
import { concatMap, mergeMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  http = inject(HttpClient);

  ngOnInit() {
    this.mergeMap_demo();
    this.concatMap_demo();
  }

  mergeMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5);

    userPublisher
      .pipe(
        mergeMap((userId) => {
          return this.http.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        }),
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  concatMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5);

    userPublisher
      .pipe(
        concatMap((userId) => {
          return this.http.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        }),
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
