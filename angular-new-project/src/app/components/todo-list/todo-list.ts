import { Component, inject } from '@angular/core';
import { TodoService, Todo } from '../../services/todo-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {

  TodoService = inject(TodoService);
  todoArr$ = this.TodoService.todoObs;



}
