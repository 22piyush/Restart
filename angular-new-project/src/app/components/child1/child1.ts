import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  SimpleChange,
  ViewChild,
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

  @ViewChild('myBox1') myBox1: any;

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
  ngAfterContentInit() {
    console.log('Child ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Child ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Child ngAfterViewInit');
    console.log(this.myBox1);
    this.myBox1.nativeElement.focus();
  }
  ngAfterViewChecked() {
    console.log('Child ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Child ngOnDestory');
  }
}
