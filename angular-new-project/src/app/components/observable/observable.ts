import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, interval } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [CommonModule],
  templateUrl: './observable.html',
  styleUrl: './observable.css',
})
export class Observable {
  ngOnInit() {
    // this.from_demo();
    this.interval_demo()
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
  interval_demo() {
    this.num$.subscribe((val) => console.log(val));
  }
}
