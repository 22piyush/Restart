import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-about',
  imports: [],
  templateUrl: './routing-about.html',
  styleUrl: './routing-about.css',
})
export class RoutingAbout {
  constructor(private router: Router) {}

  Home() {
    this.router.navigateByUrl('/home')
  }
}
