import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular';
  img_url:string = 'ddwddw'

  flag:boolean = true;

  form_data = "Angular"

  num1 = 1
  num2 = 2
}
