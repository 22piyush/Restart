import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm {
  registerForm: FormGroup | undefined;

  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormControl({
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      }),
    });
  }
}
