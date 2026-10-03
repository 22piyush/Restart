import { Component } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-todo-list',
  imports: [CommonModule],
  templateUrl: './subject-todo-list.html',
  styleUrl: './subject-todo-list.css',
})
export class SubjectTodoList {
  TodoService = inject(TodoService);

  todoArr$ = this.TodoService.todos$;

  deleteTodo(todoId: any) {
    this.TodoService.deleteTodo(todoId);
  }
}
