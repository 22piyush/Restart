import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {
  b = 200;
  c = 300;

  @Output() sendValue = new EventEmitter;

  sendParent() {
    this.sendValue.emit(this.c);
  }
}
