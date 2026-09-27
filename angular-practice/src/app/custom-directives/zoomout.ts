import {
  Directive,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appZoomout]'
})
export class ZoomoutDirective {

  @HostBinding('style.transform')
  transform = 'scale(1)';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.transform = 'scale(1.5)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.transform = 'scale(1)';
  }

}