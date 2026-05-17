import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../remaining-pipe';
import { AlphaNumeric } from '../../custom-directives/alpha-numeric';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule, RemainingPipe, AlphaNumeric],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {

  userName = 'saChin tenDulKar';
  salary = 5000;

  date = new Date();

  message = "Hello"

}
