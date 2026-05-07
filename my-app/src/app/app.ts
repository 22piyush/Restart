import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Body } from "./components/body/body";
import { Assignments } from './components/assignments/assignments';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Body, Assignments ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}




