import { Component } from '@angular/core';
import { EmployeeCrud } from '../components/employee-crud/employee-crud';
import { CommentList } from '../components/comment-list/comment-list';
import { ObservableDemo1 } from '../components/observable-demo1/observable-demo1';

@Component({
  selector: 'app-body',
  imports: [EmployeeCrud, CommentList, ObservableDemo1],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
