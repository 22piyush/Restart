import { Component, ElementRef } from '@angular/core';
import { Child1 } from '../child1/child1';
import { Child2 } from '../child2/child2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [Child1, Child2, FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  a = 100;
  c_parent: any;

  numArr: any = [10, 20, 30, 40];

  courseName: string;

  receiveDataFromChild2(c_child2: any) {
    this.c_parent = c_child2;
  }

  constructor(private ele: ElementRef) {
    // Di
    console.log('Parent constructor');
    this.courseName = 'Angular';
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Parent ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Parent ngOnDestory');
  }
}
