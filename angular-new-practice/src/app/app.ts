import { Component } from '@angular/core';
import { HttpDemo1 } from './components/http-demo1/http-demo1';
import { ObservableDemo1 } from './components/observable-demo1/observable-demo1';
import { ObservableDemo2 } from './components/observable-demo2/observable-demo2';
import { SubjectDemo2 } from './components/subject-demo2/subject-demo2';

@Component({
  selector: 'app-root',
  imports: [HttpDemo1, ObservableDemo1, ObservableDemo2, SubjectDemo2],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
