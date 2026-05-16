import { Component } from '@angular/core';
import { TextOnly } from '../../custom-directives/text-only';

@Component({
  selector: 'app-custom-directive',
  imports: [TextOnly],
  templateUrl: './custom-directive.html',
  styleUrl: './custom-directive.css',
})
export class CustomDirective {}
