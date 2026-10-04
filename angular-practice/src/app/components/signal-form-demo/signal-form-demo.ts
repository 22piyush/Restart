import { Component, signal } from '@angular/core';
import { form, FormField, schema, required, email, minLength } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form-demo',
  imports: [FormField],
  templateUrl: './signal-form-demo.html',
  styleUrl: './signal-form-demo.css',
})
export class SignalFormDemo {

  loginModel = signal({
    email: '',
    password: ''
  });

  loginForm = form(
    this.loginModel,
    schema((path) => {
      required(path.email);
      email(path.email);

      required(path.password);
      minLength(path.password, 6);
    })
  );

}