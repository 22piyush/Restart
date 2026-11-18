import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {

  ngOnInit() {
    this.from_demo();
  }

  from_demo() {
    let cars = ['BMW', 'Volvo', 'Mini'];
    let carsObservable = from(cars);

    carsObservable.subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
      complete: () => console.log('completed'),
    });
  }

  

}
