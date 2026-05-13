import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom_pipes/remaining-pipe';
import { MySortPipe } from '../../custom_pipes/my-sort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule, RemainingPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {

  userName:string = 'saCHIN TenDulkar'
  slary:number = 1200
  dataObj = new Date();
  cars = ['Tata', 'Honda', 'Maruti' , 'Toyota']


  msg:string  = "Hello Angular"

  numArr = [12,1,3,4,3,5,3];

}
