import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css',
})
export class ModelDrivenForm {
  registerForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    // this.registerForm = new FormGroup({
    //   firstName: new FormControl('Piyush', [Validators.required, Validators.minLength(3)]),
    //   lastName: new FormControl('Aglawe'),
    //   email: new FormControl('piyush@gmail.com'),

    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     state: new FormControl(''),
    //     pincode: new FormControl(''),
    //   }),
    // });

    this.registerForm = formBuilder.group({
      firstName: ['Piyush', [Validators.required, Validators.minLength(3)]],

      lastName: ['Aglawe'],

      email: ['piyush@gmail.com'],

      address: formBuilder.group({
        city: [''],
        state: [''],
        pincode: [''],
      }),
    });
  }
}
