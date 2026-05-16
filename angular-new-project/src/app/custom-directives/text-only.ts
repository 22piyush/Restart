import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextOnly]',
})
export class TextOnly {

  @HostBinding('style.backgroundColor') bgColor: string = 'red';

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    // check if value is only number
    const isNumber = /^[0-9]*$/.test(value);

    if (isNumber && value.length > 0) {
      this.bgColor = 'green';
    } else {
      this.bgColor = 'red';
    }
  }
}