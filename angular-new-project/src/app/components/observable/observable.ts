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
  }

  from_demo() {
    let cars = ['Tata', 'Honda', 'Maruti', 'Toyota'];
    let cars_observable = from(cars); // Convert array to observable

    cars_observable.subscribe({
      next: (val) => console.log(val, '11111111111'),
      error: (error) => console.log(error, '222222222222'),
      complete: () => console.log('Last Value'),
    });
  }
}
