import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSanitizer } from '../../custom-directives/input-sanitizer';

@Component({
  selector: 'app-directives-demo',
  imports: [FormsModule, InputSanitizer],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css',
})
export class DirectivesDemo {
  num: number = 2;
  courseArr = [];
}
