import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo1',
  imports: [],
  templateUrl: './signal-demo1.html',
  styleUrl: './signal-demo1.css',
})
export class SignalDemo1 {
  count: WritableSignal<number> = signal(0);

  coutDouble: Signal<number> = computed(() => this.count() * 2);
  countSquare: Signal<number> = computed(() => this.count() * this.count());

  incrementCount() {
    this.count.update((val) => val + 1);
  }
}
