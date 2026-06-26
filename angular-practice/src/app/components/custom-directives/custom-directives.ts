import { Component } from '@angular/core';
import { TextOnly } from '../../custom-directives/text-only';

@Component({
  selector: 'app-custom-directives',
  imports: [TextOnly],
  templateUrl: './custom-directives.html',
  styleUrl: './custom-directives.css',
})
export class CustomDirectives {

}
