import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
})
export class Profile {

  text: WritableSignal<string> = signal<string>('piyush');


  resetValue(){
     this.text.set("Hrshal")
  }
  setValue(val:string){
      this.text.set(val)
  }
}
