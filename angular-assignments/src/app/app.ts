import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBinding } from './components/data-binding/data-binding';
import { Parent } from './components/parent/parent';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Parent ,CommonModule, FormsModule, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
 
}
