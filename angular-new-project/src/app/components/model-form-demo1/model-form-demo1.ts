import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-model-form-demo1',
  imports: [ReactiveFormsModule],
  templateUrl: './model-form-demo1.html',
  styleUrl: './model-form-demo1.css',
})
export class ModelFormDemo1 {

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),

    lastName: new FormControl('', [Validators.required]),

    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    address: new FormGroup({
      city: new FormControl('', [Validators.required]),

      state: new FormControl('', [Validators.required]),

      pincode: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
    }),
  });

}