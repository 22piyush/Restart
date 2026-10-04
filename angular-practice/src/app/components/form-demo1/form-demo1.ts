import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form-demo1',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-demo1.html',
  styleUrl: './form-demo1.css',
})
export class FormDemo1 {
  name: string = '';
  age: string = '';
}
