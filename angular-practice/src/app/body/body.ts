import { Component } from '@angular/core';
import { ServiceComponent } from '../components/service-component/service-component';
import { HttpDemo1 } from '../components/http-demo1/http-demo1';

@Component({
  selector: 'app-body',
  imports: [ServiceComponent, HttpDemo1],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
  