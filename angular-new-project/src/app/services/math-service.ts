import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  // Sum
  sum(values: number[]): number {
    return values.reduce((total, num) => total + num, 0);
  }

  // Average
  average(values: number[]): number {
    const total = this.sum(values);

    return total / values.length;
  }

  // Index Of Maximum Value
  indexOfMax(values: number[]): number {
    let maxIndex = 0;

    for (let i = 1; i < values.length; i++) {
      if (values[i] > values[maxIndex]) {
        maxIndex = i;
      }
    }

    return maxIndex;
  }
}
