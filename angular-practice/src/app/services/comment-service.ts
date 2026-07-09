import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comment, CommentResponse } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  httpClient = inject(HttpClient);
  comment_api = 'https://dummyjson.com/comments';

  getAllComments(): Observable<Comment[]> {
    return this.httpClient
      .get<CommentResponse>(this.comment_api)
      .pipe(map((response) => response.comments));
  }
}
