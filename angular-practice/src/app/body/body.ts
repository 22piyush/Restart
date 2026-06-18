import { Component } from '@angular/core';
import { DataBinding } from '../components/data-binding/data-binding';
import { DirectivesDemo } from '../components/directives-demo/directives-demo';

@Component({
  selector: 'app-body',
  imports: [DataBinding, DirectivesDemo],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
