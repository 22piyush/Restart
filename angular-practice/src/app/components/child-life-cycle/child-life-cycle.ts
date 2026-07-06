import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child-life-cycle',
  imports: [],
  templateUrl: './child-life-cycle.html',
  styleUrl: './child-life-cycle.css',
  inputs: ['name', 'numArr'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildLifeCycle {
  name: any;
  numArr: any;

  constructor(private cdr: ChangeDetectorRef) {
    console.log('child constructor');
  }
  // ngOnChanges(myChanges: SimpleChanges) {
  //   console.log('child ngOnChanges');
  //   console.log(myChanges);
  // }
  // ngOnInit() {
  //   console.log('child ngOnInit');
  // }
  ngDoCheck() {
    console.log('child ngDoCheck');
    this.cdr.markForCheck();
  }
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
