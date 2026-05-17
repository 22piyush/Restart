import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  outputs: ['eventToEmitCValue'],
})
export class Child2Demo {
  b = 200;
  c = 300;

  eventToEmitCValue = new EventEmitter();
  sendDataToParent() {
    this.eventToEmitCValue.emit(this.c);
  }
}
