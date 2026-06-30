import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom_pipes/remaining-pipe';
import { MySortPipe } from '../../custom_pipes/my-sort-pipe';

@Component({
  selector: 'app-angular-pipes',
  imports: [CommonModule, FormsModule, RemainingPipe, MySortPipe],
  templateUrl: './angular-pipes.html',
  styleUrl: './angular-pipes.css',
})
export class AngularPipes {
  msg = 'Hello';

  numArr = [30,40,10,20,50];
}
