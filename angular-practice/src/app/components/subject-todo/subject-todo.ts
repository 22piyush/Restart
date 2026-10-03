import { Component } from '@angular/core';
import { SubjectTodoAdd } from '../subject-todo-add/subject-todo-add';
import { SubjectTodoList } from '../subject-todo-list/subject-todo-list';

@Component({
  selector: 'app-subject-todo',
  imports: [SubjectTodoList, SubjectTodoAdd],
  templateUrl: './subject-todo.html',
  styleUrl: './subject-todo.css',
})
export class SubjectTodo {

}
