import { Component } from '@angular/core';
import { MySortPipe } from '../../my-sort-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pure-impure-pipes',
  imports: [MySortPipe, FormsModule],
  templateUrl: './pure-impure-pipes.html',
  styleUrl: './pure-impure-pipes.css',
})
export class PureImpurePipes {
  numArr = [50, 10, 40, 30];
  numVal = 1;
}
