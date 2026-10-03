import { Component } from '@angular/core';
import { EmployeeCrud } from '../components/employee-crud/employee-crud';
import { CommentList } from '../components/comment-list/comment-list';
import { ObservableDemo1 } from '../components/observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../components/observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../components/observable-demo3/observable-demo3';
import { SubjectDemo1 } from '../components/subject-demo1/subject-demo1';
import { SubjectTodo } from '../components/subject-todo/subject-todo';
import { HttpDemo2 } from '../components/http-demo2/http-demo2';
import { SignalDemo1 } from '../components/signal-demo1/signal-demo1';

@Component({
  selector: 'app-body',
  imports: [
    // EmployeeCrud,
    // CommentList,
    // ObservableDemo1,
    //  ObservableDemo2,
    //   ObservableDemo3,
    // SubjectDemo1,
    // SubjectTodo,
    HttpDemo2,
    SignalDemo1,
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
