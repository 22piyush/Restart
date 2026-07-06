import { Component } from '@angular/core';

@Component({
  selector: 'app-child-life-cycle',
  imports: [],
  templateUrl: './child-life-cycle.html',
  styleUrl: './child-life-cycle.css',
})
export class ChildLifeCycle {
  constructor() {
    console.log('child constructor');
  }
  ngOnChanges() {
    console.log('child ngOnChanges');
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('child ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('child ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('child ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('child ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('child ngOnDestory');
  }
}
