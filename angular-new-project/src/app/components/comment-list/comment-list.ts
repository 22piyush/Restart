import { Component, inject } from '@angular/core';
import { CommentService } from '../../services/comment-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  imports: [CommonModule],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {

  commentService = inject(CommentService);
  comments$: Observable<Comment[]> | undefined;

  ngOnInit() {
    this.comments$ = this.commentService.getAllComments();
  }

}