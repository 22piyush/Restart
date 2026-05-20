import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { filter, forkJoin, from, interval, map, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observable',
  imports: [CommonModule],
  templateUrl: './observable.html',
  styleUrl: './observable.css',
})
export class Observable {
  httpClient = inject(HttpClient);

  ngOnInit() {
    // this.from_demo();
    // this.interval_demo();
    this.forkjoin_demo();
  }

  from_demo() {
    let cars = ['tata', 'honda', 'maruti', 'toyota'];
    let cars_observable = from(cars);

    cars_observable.subscribe({
      next: (val) => console.log(val),
      error: (error) => console.log(error),
      complete: () => console.log('Last value received'),
    });
  }

  num$ = interval(1000);
  even_num$ = this.num$.pipe(filter((val) => val % 2 == 0));
  first_five = this.num$.pipe(take(5));

  num_square = this.num$.pipe(map((val) => val * val));

  currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));

  forkjoin_demo() {
    let api_1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    let api_2 = this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    let api_3 = this.httpClient.get('https://jsonplaceholder.typicode.com/todos');

    forkJoin([api_1, api_2, api_3]).subscribe((responseArr) => {
      console.log(responseArr);
    });
  }

  interval_demo() {
    this.num$.subscribe((val) => console.log(val));
  }
}
