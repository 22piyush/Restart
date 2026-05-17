import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
  inputs: ['a', 'b', 'numArr'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1 {
  a: any;
  b: any;
  numArr: any;

  constructor(
    private ele: ElementRef,
    private dtcdr: ChangeDetectorRef,
  ) {
    console.log('Child constructor');
  }
  ngOnChanges() {
    console.log('Child ngOnChanges');
  }
  ngOnInit() {
    console.log('Child ngOnInit');
  }
  ngDoCheck() {
    console.log('Child ngDoCheck');
    this.dtcdr.markForCheck();
  }
  // ngAfterContentInit() {
  //   console.log('Child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Child ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('Child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Child ngOnDestory');
  // }
}
