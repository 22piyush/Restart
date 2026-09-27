import { Component, ViewChild } from '@angular/core';
import { LifecycleChild } from '../lifecycle-child/lifecycle-child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  imports: [LifecycleChild, FormsModule],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle {
  userData = 'Piyush';

  @ViewChild('myBox1') myBox1: any;

  // constructor() {
  //   console.log('Parent constructor');
  // }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  //   console.log(this.myBox1);
  //   this.myBox1.nativeElement.value = 'Hello World';
  //   this.myBox1.nativeElement.focus();
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  ngOnDestroy() {
    console.log('Parent ngOnDestory');
  }
}
