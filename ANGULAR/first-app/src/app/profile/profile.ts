import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  height = signal(100);
  width = signal(20);
  area = computed(() => this.height() * this.width());

  handleHeight(){
    this.height.set(this.height() + 10);
  }
}
