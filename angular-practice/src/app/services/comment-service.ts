import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  httpClient = inject(HttpClient);
  api_url = 'https://jsonplaceholder.typicode.com/comments';

  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.api_url);
  }
}
