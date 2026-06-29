import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-pipes',
  imports: [CommonModule, FormsModule],
  templateUrl: './angular-pipes.html',
  styleUrl: './angular-pipes.css',
})
export class AngularPipes {
  msg = 'Hello';
}
