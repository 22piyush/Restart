import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, interval } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  ngOnInit() {
    this.from_demo();
    this.interval_demo()
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti', 'Toyota'];
    let cars_observable = from(cars);
    cars_observable.subscribe({
      next: (val) => console.log(val),
      error: (error) => console.log(error),
      complete: () => console.log('Last'),
    });
  }

  num$ = interval(1000);
  interval_demo() {
    this.num$.subscribe({
      next: (val) => console.log(val),
    });
  }
}
