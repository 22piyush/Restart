import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Categories } from '../components/categories/categories';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-body',
  imports: [Navbar, Categories, Footer],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
