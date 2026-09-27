import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  imports: [],
  templateUrl: './lifecycle-child.html',
  styleUrl: './lifecycle-child.css',
  inputs: ['user'],
})
export class LifecycleChild {
  // constructor() {
  //   console.log('child constructor');
  // }
  // ngOnChanges(myChanges:SimpleChanges) {
  //   console.log('child ngOnChanges');
  //   console.log(myChanges);
  // }
  // ngOnInit() {
  //   console.log('child ngOnInit');
  // }
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
  ngOnDestroy() {
    console.log('child ngOnDestory');
  }
}
