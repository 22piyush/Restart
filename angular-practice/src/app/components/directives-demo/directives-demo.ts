import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-demo',
  imports: [FormsModule, CommonModule],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css',
})
export class DirectivesDemo {
  num: number = 2;
  courseArr = ['Angular', 'React', 'Web Development', 'Java', 'Python'];
}
