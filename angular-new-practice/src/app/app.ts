import { Component } from '@angular/core';
import { HttpDemo1 } from './components/http-demo1/http-demo1';
import { ObservableDemo1 } from './components/observable-demo1/observable-demo1';
import { ObservableDemo2 } from './components/observable-demo2/observable-demo2';
import { SubjectDemo2 } from './components/subject-demo2/subject-demo2';
import { TodoAdd } from './components/todo-add/todo-add';
import { TodoList } from './components/todo-list/todo-list';
import { ModelDrivenForm } from './components/model-driven-form/model-driven-form';
import { SignalFormDemo } from './components/signal-form-demo/signal-form-demo';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [HttpDemo1, ObservableDemo1, ObservableDemo2, SubjectDemo2, TodoAdd, TodoList, ModelDrivenForm, SignalFormDemo, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
