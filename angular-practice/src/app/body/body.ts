import { Component } from '@angular/core';
import { ParentDemo } from '../components/parent-demo/parent-demo';

@Component({
  selector: 'app-body',
  imports: [ParentDemo],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
  