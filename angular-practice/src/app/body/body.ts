import { Component } from '@angular/core';
import { CustomDirectives } from '../components/custom-directives/custom-directives';

@Component({
  selector: 'app-body',
  imports: [CustomDirectives],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
