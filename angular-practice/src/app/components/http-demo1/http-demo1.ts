import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
  user_api = 'https://dummyjson.com/users';

  //Dependency Injection
  httpClient = inject(HttpClient);
  // constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    // httpClient.get() return Observable, to get data we use subscribe()
    this.httpClient.get(this.user_api).subscribe((res) => {
      console.log(res);
    });
  }
}
