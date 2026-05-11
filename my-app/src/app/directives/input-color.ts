import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputColor]',
  standalone: true
})
export class InputColorDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInput() {

    const value = this.el.nativeElement.value;

    if (/[0-9]/.test(value)) {

      this.el.nativeElement.style.backgroundColor = 'red';
      this.el.nativeElement.style.color = 'white';

    } else {

      this.el.nativeElement.style.backgroundColor = 'green';
      this.el.nativeElement.style.color = 'white';

    }

  }

}