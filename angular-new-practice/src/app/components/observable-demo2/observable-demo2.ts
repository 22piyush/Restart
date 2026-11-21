import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, mergeMap } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.mergeMap_demo();
  }

  getUserDetails(userId: number) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  mergeMap_demo() {
    let userPublisher = of(1, 2, 3, 4, 5);

    let userObservable = userPublisher.pipe(mergeMap((userId) => this.getUserDetails(userId)));

    userObservable.subscribe({
      next: (response) => {
        console.log('User Details:', response);
      },
      error: (error) => {
        console.log('API Error:', error);
      },
      complete: () => {
        console.log('All API calls completed');
      },
    });
  }
}
