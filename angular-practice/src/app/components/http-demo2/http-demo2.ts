import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-demo2',
  imports: [CommonModule, FormsModule],
  templateUrl: './http-demo2.html',
  styleUrl: './http-demo2.css',
})
export class HttpDemo2 {
  user_api = 'https://dummyjson.com/users';

  userArr: any = signal([]);

  HttpClient = inject(HttpClient);

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.HttpClient.get(this.user_api).subscribe((res: any) => {
      this.userArr.set(res.users);
    });
  }
}
