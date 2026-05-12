import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {

  userName:string = 'saCHIN TenDulkar'

  slary:number = 1200

  dataObj = new Date();

  cars = ['Tata', 'Honda', 'Maruti' , 'Toyota']

  msg:string  = "Hello Angular"

}
