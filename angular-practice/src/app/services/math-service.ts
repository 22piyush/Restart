import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  sum(values: number[]): number {
    return values.reduce((acc, curr) => acc + curr, 0);
  }

  multiply(values: number[]): number {
    return values.reduce((acc, curr) => acc * curr, 1);
  }
}
