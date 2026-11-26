import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment } from '../../actions/counter.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count$: Observable<number>;

  constructor(private store: Store<{ countData: number }>) {
    this.count$ = this.store.select((state) => state.countData);
  }

  increment() {
    this.store.dispatch(increment());
  }
}