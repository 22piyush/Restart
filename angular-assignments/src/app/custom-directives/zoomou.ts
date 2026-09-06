import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appZoomou]'
})
export class Zoomou {

  constructor(private element: ElementRef) {

    this.element.nativeElement.style.transform = 'scale(1.5)';

  }
}