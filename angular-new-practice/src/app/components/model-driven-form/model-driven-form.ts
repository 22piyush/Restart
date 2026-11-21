import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [ReactiveFormsModule],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css',
})
export class ModelDrivenForm {
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('Piyush' , [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('Aglawe' , [Validators.required, Validators.minLength(3)]),
      email: new FormControl('piyushahlawegmail.com' , [Validators.required, Validators.email]),
      password: new FormControl('password123' , [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('password123' , [Validators.required, Validators.minLength(6)]),
    });
  }
}
