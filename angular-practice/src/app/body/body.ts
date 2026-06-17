import { Component } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Categories } from '../components/categories/categories';
import { Footer } from '../components/footer/footer';
import { DataBinding } from '../components/data-binding/data-binding';
import { DirectivesDemo } from '../components/directives-demo/directives-demo';

@Component({
  selector: 'app-body',
  imports: [Navbar, Categories, Footer, DataBinding, DirectivesDemo],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
