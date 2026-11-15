import { Component } from '@angular/core';
import { HttpDemo1 } from './components/http-demo1/http-demo1';

@Component({
  selector: 'app-root',
  imports: [HttpDemo1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
