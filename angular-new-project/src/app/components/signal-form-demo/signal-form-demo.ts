import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form-demo',
  imports: [FormField],
  templateUrl: './signal-form-demo.html',
  styleUrl: './signal-form-demo.css',
})
export class SignalFormDemo {
  loginModel = signal({ email: '', password: '' });
  loginForm = form(this.loginModel);


}
