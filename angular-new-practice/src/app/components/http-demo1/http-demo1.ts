import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
  user_api = 'https://jsonplaceholder.typicode.com/users';
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.fetchUser_javascript();
    this.fetchUser_angular();
  }

  async fetchUser_javascript() {
    const response = await fetch(this.user_api);
    const data = await response.json();
    console.log(data);
  }


  fetchUser_angular() {
    
    this.httpClient.get(this.user_api).subscribe((res) =>{
      console.log(res);
    });

  }

}
