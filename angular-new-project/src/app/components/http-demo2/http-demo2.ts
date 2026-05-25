import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-demo2',
  imports: [],
  templateUrl: './http-demo2.html',
  styleUrl: './http-demo2.css',
})
export class HttpDemo2 {

  user_api = 'https://jsonplaceholder.typicode.com/users';

  httpClient = inject(HttpClient);

  userArr = signal<any[]>([]);

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.httpClient.get<any[]>(this.user_api).subscribe((res) => {
      this.userArr.set(res);
    });
  }
}