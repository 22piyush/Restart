import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm {

  registerForm!: FormGroup;

  constructor() {

    this.registerForm = new FormGroup({

      firstName: new FormControl(),

      lastName: new FormControl(),

      email: new FormControl(),

      address: new FormGroup({

        city: new FormControl(),

        state: new FormControl(),

        pincode: new FormControl(),

      })

    });

  }
}