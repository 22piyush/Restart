import { Component } from '@angular/core';

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.html',
  styleUrl: './category-item.css',
  inputs: ['categoryObj'],
})
export class CategoryItem {
  categoryObj: any;

  constructor() {
    console.log('child Constructor');
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
    console.log('child ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('child ngOnDestroy');
  }
}
