import { Component } from '@angular/core';
import { forkJoin, from, interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { range } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  ngOnInit() {
    // this.from_demo();
    // this.interval_demo();

    this.fork_join_demo();
  }

  from_demo() {
    const source = [1, 2, 3, 4, 5];

    let cars_observable = from(source);

    cars_observable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
      complete: () => console.log('completed'),
    });
  }

  nums$ = interval(1000);

  time$ = interval(1000).pipe(map((value) => new Date().toLocaleTimeString()));

  even_num$ = this.nums$.pipe(filter((num) => num % 2 === 0));
  first_5$ = this.nums$.pipe(take(5));
  square_num$ = this.nums$.pipe(
    filter((num) => num % 2 === 0),
    map((num) => num * num),
  );

  numbers$ = range(1, 5);

  interval_demo() {
    this.nums$.subscribe((value) => console.log(value));
    this.numbers$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('completed'),
    });
  }

  httpClient = inject(HttpClient);
  fork_join_demo() {
    let api1 = this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1');
    let api2 = this.httpClient.get('https://jsonplaceholder.typicode.com/posts/2');
    let api3 = this.httpClient.get('https://jsonplaceholder.typicode.com/posts/3');

    forkJoin([api1, api2, api3]).subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('completed'),
    });
  }
}
