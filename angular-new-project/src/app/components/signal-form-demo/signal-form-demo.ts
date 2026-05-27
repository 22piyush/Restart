import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-form-demo',
  imports: [],
  templateUrl: './signal-form-demo.html',
  styleUrl: './signal-form-demo.css',
})
export class SignalFormDemo {
  loginModel = signal({ email: '', password: '' });
}
