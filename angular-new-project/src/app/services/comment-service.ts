import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  http = inject(HttpClient);

  comment_api = 'https://jsonplaceholder.typicode.com/comments';

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.comment_api);
  }

}