import { Component, signal } from '@angular/core';
import { form, FormField, required, email, minLength } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form-demo',
  imports: [FormField],
  templateUrl: './signal-form-demo.html',
  styleUrl: './signal-form-demo.css',
})
export class SignalFormDemo {

  loginModel = signal({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (schema) => {
    required(schema.email, { message: 'Email is required' });
    email(schema.email, { message: 'Please enter a valid email' });

    required(schema.password, { message: 'Password is required' });
    minLength(schema.password, 6, {
      message: 'Password must be at least 6 characters'
    });
  });

}