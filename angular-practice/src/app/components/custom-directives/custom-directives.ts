import { Component } from '@angular/core';
import { TextOnly } from '../../custom-directives/text-only';
import { DisablePaste } from '../../custom-directives/disable-paste';

@Component({
  selector: 'app-custom-directives',
  imports: [TextOnly, DisablePaste],
  templateUrl: './custom-directives.html',
  styleUrl: './custom-directives.css',
})
export class CustomDirectives {}
