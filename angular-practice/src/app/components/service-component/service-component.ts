import { Component } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-service-component',
  imports: [],
  templateUrl: './service-component.html',
  styleUrl: './service-component.css',
})
export class ServiceComponent {
  constructor(private mathService: MathService) {
    //Dependency Injection of MathService
  }

  ngOnInit() {
    const numbers = [1, 2, 3, 4, 5];
    const sum = this.mathService.sum(numbers);
    const product = this.mathService.multiply(numbers);
    console.log(`Sum: ${sum}, Product: ${product}`);
  }
}
