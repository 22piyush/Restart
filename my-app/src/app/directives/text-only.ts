import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextOnly]',
})
export class TextOnly {

  @HostBinding('style.background-color')
  myBgColor: string = 'lightgreen';

  @HostListener('keyup', ['$event'])
  handlekeyUp(event: KeyboardEvent) {

    const val = (event.target as HTMLInputElement).value;

    // check number exists or not
    const hasNumber = /\d/.test(val);

    if (hasNumber) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'lightgreen';
    }
  }
}