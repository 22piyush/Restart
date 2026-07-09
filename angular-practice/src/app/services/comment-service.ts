import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  httpClient = inject(HttpClient);
  comment_api = '';

  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.comment_api);
  }
}
