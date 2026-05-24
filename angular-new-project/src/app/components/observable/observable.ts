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
  ngOnInit() {
    this.from_demo();
    this.interval_demo();
    this.fork_join();
  }

  httpClient = inject(HttpClient);

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti', 'Toyota'];
    let cars_observable = from(cars); // Convert array to observable

    cars_observable.subscribe({
      next: (val) => console.log(val, '11111111111'),
      error: (error) => console.log(error, '222222222222'),
      complete: () => console.log('Last Value'),
    });
  }

  num$ = interval(1000);
  even_num$ = this.num$.pipe(filter((val) => val % 2 == 0));

  first_5 = this.num$.pipe(take(5));

  num_square = this.num$.pipe(map((val) => val * val));

  interval_demo() {
    this.num$.subscribe((val) => console.log(val));
  }

  currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));

  fork_join() {
    let api_1 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    let api_2 = this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    let api_3 = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
  }
}
