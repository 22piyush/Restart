import { Component, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child-life-cycle',
  imports: [],
  templateUrl: './child-life-cycle.html',
  styleUrl: './child-life-cycle.css',
  inputs: ['name'],
})
export class ChildLifeCycle {
  name: any;

  // constructor() {
  //   console.log('child constructor');
  //   this.courseName = 'Angular';
  // }
  ngOnChanges() {
    console.log('child ngOnChanges');
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  // ngDoCheck() {
  //   console.log('child ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}
