import { Component } from '@angular/core';
import { ServiceComponent } from '../components/service-component/service-component';

@Component({
  selector: 'app-body',
  imports: [ServiceComponent],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
  