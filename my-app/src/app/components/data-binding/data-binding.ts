import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  className:string = "Angular";
  img_url:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGTcQI9_LYx7i1ZBeoE4SV1ZOwV9I-gRZfw&s"
  btnDisables:boolean = true
}
