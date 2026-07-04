import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReversePipePipe } from './customPipes/reverse-pipe-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ReversePipePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  val = "Angular"

}
