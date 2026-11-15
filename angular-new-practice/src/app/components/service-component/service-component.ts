import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-service-component',
  imports: [],
  templateUrl: './service-component.html',
  styleUrl: './service-component.css',
})
export class ServiceComponent {

  // mathService = inject(MathService);
  // constructor(private mathService: MathService) {}
}
