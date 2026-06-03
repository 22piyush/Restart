import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-testing',
  imports: [],
  templateUrl: './unit-testing.html',
  styleUrl: './unit-testing.css',
})
export class UnitTesting {
  add(a: number, b: number) {
    return a + b;
  }
}
