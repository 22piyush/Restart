import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisablePaste]',
})
export class DisablePaste {
  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
  }
}
