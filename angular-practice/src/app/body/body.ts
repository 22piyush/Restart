import { Component } from '@angular/core';
import { EmployeeCrud } from '../components/employee-crud/employee-crud';
import { CommentList } from '../components/comment-list/comment-list';

@Component({
  selector: 'app-body',
  imports: [EmployeeCrud, CommentList],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
