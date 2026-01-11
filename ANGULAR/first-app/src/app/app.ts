import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'first-app';
  count = 0;
  counter(type:string){

    type == 'minus' ? this.count > 0 && this.count-- : this.count++;
    
  }
  
}
