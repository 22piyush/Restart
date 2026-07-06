import { ChangeDetectorRef, Component } from '@angular/core';
import { ChildLifeCycle } from '../child-life-cycle/child-life-cycle';

@Component({
  standalone: true,
  selector: 'app-life-cycle',
  imports: [ChildLifeCycle],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle {
  name = 12;
  numArr = [10, 20, 30, 40];

  constructor(private cdr: ChangeDetectorRef) {
    console.log('Parent constructor');
  }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
    this.cdr.markForCheck();
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
