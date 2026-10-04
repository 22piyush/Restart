import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form-demo',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form-demo.html',
  styleUrl: './template-form-demo.css',
})
export class TemplateFormDemo {
  submitMyForm(formData: any) {
    console.log(formData);
  }
}
