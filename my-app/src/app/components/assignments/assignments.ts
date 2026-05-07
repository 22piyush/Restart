import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignments',
  imports: [FormsModule],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css',
})
export class Assignments {

  showText:boolean = true;
  showPassword:boolean = true;
  dropdownValue:string = '';
  counterText:number = 0;
  tempValue:number = 0;
  fahValue:number = 0;
  selectedColor:string = ''
  fontSize:number = 20;

  toggleText(){
    this.showText = !this.showText;
  }

  togglePassword(){
    this.showPassword = !this.showPassword;
  }

  counter(type:string){
    if(type == 'add'){
      this.counterText++;
    }
    if(type == 'remove'){
      this.counterText == 0 ? this.counterText = 0 : this.counterText--;
    }
    if(type == 'reset'){
      this.counterText = 0;
    }
  }

  calculateTemp(){
    this.fahValue =  (this.tempValue * (9/5)) + 32
  }

  textIncrese(type:string){
    if(type == 'add'){
      this.fontSize++;
    }
     if(type == 'remove'){
      this.fontSize--;
    }
  }
}
