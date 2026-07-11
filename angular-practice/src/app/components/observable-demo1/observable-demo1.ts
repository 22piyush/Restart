import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { filter, forkJoin, from, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {

  httpClient = inject(HttpClient);
  
  ngOnInit() {
    this.from_demo();
    this.interval_demo();

    this.fork_join_demo();
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
  even_num$ = this.num$.pipe(filter((val) => val % 2 == 0));
  interval_demo() {
    this.num$.subscribe({
      next: (val) => console.log(val),
    });
  }


  fork_join_demo(){
    let api1 = "https://dummyjson.com/products"
    let api2 = "https://dummyjson.com/carts"
    let api3 = "https://dummyjson.com/users"

    forkJoin([api1,api2,api3]).subscribe(resArr => {
      
    })
  }
}
