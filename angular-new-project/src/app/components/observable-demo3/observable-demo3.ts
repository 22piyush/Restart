import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Observable, switchMap, map } from 'rxjs';

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
      switchMap((term: any) => this.http.get<any>(`https://dummyjson.com/users/search?q=${term}`)),

      map((response: any) => (response.users.length > 0 ? response.users : [])),
    );
  }
}
