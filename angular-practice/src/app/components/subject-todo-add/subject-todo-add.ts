import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-subject-todo-add',
  imports: [],
  templateUrl: './subject-todo-add.html',
  styleUrl: './subject-todo-add.css',
})
export class SubjectTodoAdd {
  TodoService = inject(TodoService);

  addTodo(todoText: string) {
    this.TodoService.addNewTodo({ value: todoText });
  }
}
