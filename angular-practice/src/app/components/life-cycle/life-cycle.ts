import { Component } from '@angular/core';
import { ChildLifeCycle } from '../child-life-cycle/child-life-cycle';

@Component({
  selector: 'app-life-cycle',
  imports: [ChildLifeCycle],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle {
  constructor() {
    console.log('Parent constructor');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
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
