import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  data: WritableSignal<string | number | boolean> = signal<string | number | boolean>(10);
  speed:Signal<number> = computed<number>(()=> 90)
  users:WritableSignal<string[]> = signal(['anil', 'sidhu', 'peter'])

  handleData(){

    if(this.users().includes('bruce')){
      alert("Already Exist")
    }else{
      this.users.update((item) => [...item, 'bruce']);
    }  

    console.log(this.users());
    
  }
}
