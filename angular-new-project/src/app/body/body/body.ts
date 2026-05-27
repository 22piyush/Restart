import { Component } from '@angular/core';
import { DataBinding } from '../../components/data-binding/data-binding';
import { Directives } from '../../components/directives/directives';
import { UserList } from '../../components/user-list/user-list';
import { CustomDirective } from '../../components/custom-directive/custom-directive';
import { PipesDemo } from '../../components/pipes-demo/pipes-demo';
import { PureImpurePipes } from '../../components/pure-impure-pipes/pure-impure-pipes';
import { ParentDemo } from '../../components/parent-demo/parent-demo';
import { Parent } from '../../components/parent/parent';
import { EmployeeCrud } from '../../components/employee-crud/employee-crud';
import { Services } from '../../components/services/services';
import { HttpDemo1 } from '../../components/http-demo1/http-demo1';
import { EmployeeCrudHttp } from '../../components/employee-crud-http/employee-crud-http';
import { CommentList } from '../../components/comment-list/comment-list';
import { Observable } from '../../components/observable/observable';
import { ObservableDemo2 } from '../../components/observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../../components/observable-demo3/observable-demo3';
import { SubjectDemo1 } from '../../components/subject-demo1/subject-demo1';
import { TodoList } from '../../components/todo-list/todo-list';
import { TodoAdd } from '../../components/todo-add/todo-add';
import { TodoCrud } from '../../components/todo-crud/todo-crud';
import { HttpDemo2 } from '../../components/http-demo2/http-demo2';
import { Signals } from '../../components/signals/signals';
import { Forms } from '../../components/forms/forms';
import { ModelFormDemo1 } from '../../components/model-form-demo1/model-form-demo1';
import { SignalFormDemo } from '../../components/signal-form-demo/signal-form-demo';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    // CommentList,
    // EmployeeCrudHttp,
    // HttpDemo1,
    // Parent,
    // ParentDemo,
    // DataBinding,
    // Directives,
    // CustomDirective,
    // PipesDemo,
    // PureImpurePipes,
    // EmployeeCrud,
    // Services,
    // Observable,
    // ObservableDemo2,
    // ObservableDemo3,
    // SubjectDemo1,
    // TodoList,
    // TodoAdd,
    // TodoCrud,
    // HttpDemo2,
    // Signals,
    // Forms,
    // ModelFormDemo1,
    // SignalFormDemo
    RouterOutlet
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
