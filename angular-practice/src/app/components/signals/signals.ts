import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  httpClient = inject(HttpClient);
  userId: WritableSignal<number> = signal(1);
  userData: WritableSignal<any> = signal({});



}
