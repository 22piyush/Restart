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

  userDetailsEffect = effect(() => {
    const userId = this.userId();
    this.fetchUserDetails(userId);
  });

  fetchUserDetails() {
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
      .subscribe((res) => {
        this.userData.set(res);
      });
  }
}
