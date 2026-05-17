import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math-service';
import { ObjectUtilService } from '../../services/object-util-service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  mathService = inject(MathService); // another type
  utilService = inject(ObjectUtilService)

  constructor(private MathService: MathService) {//DI
    
  }

  ngOnInit() {
    console.log(`Sum is - ${this.mathService.sum([10, 20, 30, 40, 50])}`);
    console.log(`Average is - ${this.MathService.average([10, 20, 30, 40, 50])}`);
    console.log(`Index Of Max is - ${this.MathService.indexOfMax([10, 20, 30, 40, 50])}`);
  

    console.log(this.utilService);
    

  }
}
