import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom_pipes/remaining-pipe';

@Component({
  selector: 'app-angular-pipes',
  imports: [CommonModule, FormsModule, RemainingPipe],
  templateUrl: './angular-pipes.html',
  styleUrl: './angular-pipes.css',
})
export class AngularPipes {
  msg = 'Hello';
}
