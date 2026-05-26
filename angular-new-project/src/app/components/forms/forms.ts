import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  name = '';
  age = null;
}
