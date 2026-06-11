import { Component } from '@angular/core';
import { Body } from './body/body';

@Component({
  selector: 'app-root',
  imports: [Body],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
