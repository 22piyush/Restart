import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBinding } from './components/data-binding/data-binding';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
 
}
