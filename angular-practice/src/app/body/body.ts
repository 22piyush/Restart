import { Component } from '@angular/core';
import { ParentDemo } from '../components/parent-demo/parent-demo';
import { Lifecycle } from '../components/lifecycle/lifecycle';

@Component({
  selector: 'app-body',
  imports: [ParentDemo, Lifecycle],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
  