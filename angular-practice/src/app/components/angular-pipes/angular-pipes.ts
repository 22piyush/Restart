import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  imports: [CommonModule],
  templateUrl: './angular-pipes.html',
  styleUrl: './angular-pipes.css',
})
export class AngularPipes {
  userName = "piyush22"

  salary = 5000
}
