import { Component } from '@angular/core';
import { from,interval } from 'rxjs';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {

  ngOnInit() {  
    this.from_demo();
    this.interval_demo();
  }

  from_demo() {
    const source = [1, 2, 3, 4, 5];
    
    let cars_observable = from(source);

    cars_observable.subscribe({
      next:(value) => console.log(value),
      error:(err) => console.log(err),
      complete:() => console.log('completed')
    }); 


  }

  

  nums$ = interval(1000);

  interval_demo(){
    this.nums$.subscribe((value) => console.log(value));  
  }

}
