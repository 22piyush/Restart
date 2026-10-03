import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { debounceTime, distinct, distinctUntilChanged, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  imports: [CommonModule, FormsModule],
  templateUrl: './observable-demo3.html',
  styleUrl: './observable-demo3.css',
})
export class ObservableDemo3 {

  httpClient = inject(HttpClient);

  inputValue: string = '';

  searchSubject = new Subject<string>();

  ngOnInit() {

    this.searchSubject
      .pipe(

        debounceTime(500), // Wait for 500ms pause in events
        distinctUntilChanged(), // Only emit if value is different from previous

        switchMap((value) => {
          console.log('API calling for:', value);

          return this.httpClient.get(
            `https://dummyjson.com/products/search?q=${value}`
          );
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  search(value: string) {
    this.searchSubject.next(value);
  }
}