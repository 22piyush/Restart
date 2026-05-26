import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  HttpClient = inject(HttpClient);
  userId: WritableSignal<number> = signal(1);
  userData: WritableSignal<any> = signal({});

  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id);
  });

  fetchUserDetails(id: number) {
    this.HttpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe((res) => {
      this.userData.set(res);
    });
  }
}
