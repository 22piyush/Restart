// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

// import { Observable, switchMap, map } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component, ElementRef, ViewChild } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  Observable,
  switchMap,
  map,
  fromEvent,
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
} from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './observable-demo3.html',
  styleUrl: './observable-demo3.css',
})
export class ObservableDemo3 {
  searchResult$!: Observable<any[]>;

  searchForm = new FormGroup({
    searchField: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.searchResult$ = this.searchForm.get('searchField')!.valueChanges.pipe(
      debounceTime(200),

      distinctUntilChanged(),

      switchMap((term: any) => this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)),

      map((response: any) => (response.users.length > 0 ? response.users : [])),
    );
  }

  @ViewChild('loginBtn') loginBtn!: ElementRef;

  ngAfterViewInit() {
    fromEvent(this.loginBtn.nativeElement, 'click')
      .pipe(
        exhaustMap((val) => {
          return this.http.get('https://httpbin.org/delay/5');
        }),
      )
      .subscribe({
        next: (res) => console.log('Response:', res),
        error: (err) => console.error('Error:', err),
      });
  }
}
