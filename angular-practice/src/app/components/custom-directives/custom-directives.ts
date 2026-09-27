import { Component } from '@angular/core';
import { ZoomoutDirective } from '../../custom-directives/zoomout';
import { OrdinalPipe } from '../../pipes/ordinal-pipe';

@Component({
  selector: 'app-custom-directives',
  imports: [ZoomoutDirective,OrdinalPipe],
  templateUrl: './custom-directives.html',
  styleUrl: './custom-directives.css',
})
export class CustomDirectives {
  number = 21;

  ordinalValue = '';

  constructor() {
    const pipe = new OrdinalPipe();
    this.ordinalValue = pipe.transform(this.number);
  }
}
