import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  http = inject(HttpClient);

  get(url: string) {
    return this.http.get(url);
  }

}