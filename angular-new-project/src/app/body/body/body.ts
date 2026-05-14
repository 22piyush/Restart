import { Component } from '@angular/core';
import { Category } from '../../components/category/category';

@Component({
  selector: 'app-body',
  imports: [Category],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
