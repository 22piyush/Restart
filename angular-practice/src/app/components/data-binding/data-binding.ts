import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: number = 10;
  courseFee: number = 110;


  flag: boolean = true;

  toggleFlag() {
    this.flag = !this.flag;
  }

  max_length : number = 10;
}
