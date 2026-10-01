import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http-service';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
 
  user_api = 'https://jsonplaceholder.typicode.com/users';

  httpClient = inject(HttpService);

  ngOnInit() {
    this.fetchUserAngular();
  }

  fetchUserAngular() {
    
    this.httpClient.get(this.user_api).subscribe(
      (data) => {
        console.log(data);
      }
    );

  }

}
