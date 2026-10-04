import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
})
export class DynamicForm {

  // Form configuration
  formFields = [

    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      value: '',
      required: true
    },

    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      value: '',
      required: true
    },

    {
      name: 'email',
      label: 'Email',
      type: 'email',
      value: '',
      required: true
    },

    {
      name: 'age',
      label: 'Age',
      type: 'number',
      value: '',
      required: true
    },

    {
      name: 'city',
      label: 'City',
      type: 'text',
      value: '',
      required: true
    },

    {
      name: 'pincode',
      label: 'Pincode',
      type: 'text',
      value: '',
      required: true
    }

  ];


  dynamicForm = new FormGroup({});


  constructor() {

    this.formFields.forEach(field => {

      this.dynamicForm.addControl(
        field.name,
        new FormControl(
          field.value,
          field.required ? Validators.required : []
        )
      );

    });

  }


  submitForm() {

    if (this.dynamicForm.invalid) {

      this.dynamicForm.markAllAsTouched();

      return;

    }

    console.log(this.dynamicForm.value);

  }

}