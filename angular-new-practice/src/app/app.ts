import { Component } from '@angular/core';
import { HttpDemo1 } from './components/http-demo1/http-demo1';
import { ObservableDemo1 } from './components/observable-demo1/observable-demo1';

@Component({
  selector: 'app-root',
  imports: [HttpDemo1, ObservableDemo1],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
