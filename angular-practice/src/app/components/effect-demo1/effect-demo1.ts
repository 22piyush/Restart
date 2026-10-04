import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-effect-demo1',
  imports: [],
  templateUrl: './effect-demo1.html',
  styleUrl: './effect-demo1.css',
})
export class EffectDemo1 {
  httpClient = inject(HttpClient);
  userId: WritableSignal<number> = signal(1);
  userData: WritableSignal<any> = signal({});

  userDetailsEffect = effect(() => {
    console.log("1111111111");
    
    const id = this.userId();
    this.fetchUserDetails(id);
  });

  fetchUserDetails(id: number) {
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe((response) => {
        this.userData.set(response);
      });
  }

  destroyEffect() {
    this.userDetailsEffect.destroy();
  }

  incrementUserId() {
    this.userId.update((val) => val + 1);
  }

}
