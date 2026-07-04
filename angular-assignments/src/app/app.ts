import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReversePipePipe } from './customPipes/reverse-pipe-pipe';
import { OrdinalPipe } from './customPipes/ordinal-pipe';
import { RemainingPipe } from './customPipes/remaining-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule,RemainingPipe, ReversePipePipe , OrdinalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

 val = 123456789123

}
