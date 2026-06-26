import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextOnly]',
})
export class TextOnly {
  @HostBinding('style.background-color')
  myBgColor: string = 'red';

  @HostListener('keyup', ['$event.target.value'])
  handleKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    const value = target.value ?? '';

    const regex = /^[a-zA-Z]*$/;

    this.myBgColor = regex.test(value) ? 'cyan' : 'red';
  }
}
