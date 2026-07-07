import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math-service';
import { ObjectUtilService } from '../../services/object-util-service';

@Component({
  selector: 'app-service-demo',
  imports: [],
  templateUrl: './service-demo.html',
  styleUrl: './service-demo.css',
})
export class ServiceDemo {
  // Both Are use to achieve DI
  mathService = inject(MathService);
  // objectService = inject(ObjectUtilService);
  // constructor(
  //   private mathService: MathService ,
  //   private objectService:ObjectUtilService
  // ) {}

  ngOnInit() {
    this.mathServiceFunc();
  }

  mathServiceFunc() {
    console.log('Math', this.mathService.sum([10, 20, 30, 40, 50, 60, 70, 80]));
    console.log(this.mathService.average([10, 20, 30, 40, 50, 60, 70, 80]));
    console.log(this.mathService.indexOfMax([10, 20, 30, 40, 50, 60, 70, 80]));
  }
}
