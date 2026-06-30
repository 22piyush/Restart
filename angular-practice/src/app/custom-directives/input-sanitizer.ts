import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputSanitizer]',
})
export class InputSanitizer {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    // Allow only letters, numbers, and spaces
    const sanitizedValue = input.value.replace(/[^a-zA-Z0-9 ]/g, '');

    // Update the input value
    this.renderer.setProperty(this.el.nativeElement, 'value', sanitizedValue);
  }
}
