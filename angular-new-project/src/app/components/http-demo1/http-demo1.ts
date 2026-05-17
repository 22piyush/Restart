import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
  user_api = 'https://jsonplaceholder.typicode.com/todos/';
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.fetchUser_javascript();
    this.fetchUser_angular();
  }

  async fetchUser_javascript() {
    let res = await fetch(this.user_api).then((res) => {
      res.json().then((userArr) => {
        console.log(userArr);
      });
    });
  }

  fetchUser_angular() {
    this.httpClient.get(this.user_api).subscribe((res) => {
      console.log(res, "Angular");
    });
  }
}
