import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: any;
  value: string;
}

const initialTodos: Todo[] = [
  { id: 1, value: 'Learn Angular' },
  { id: 2, value: 'Learn RxJS' },
  { id: 3, value: 'Build a Todo App' },
];

@Injectable({
  providedIn: 'root',
})

export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>(initialTodos);
  readonly todos$ = this.todosSubject.asObservable();

  private todoArr: Todo[] = this.todosSubject.value;
  private nextId = 3;

  addNewTodo(item: any) {
    item.id = this.nextId++;
    this.todoArr.push(item);
    this.todosSubject.next([...this.todoArr]);
  }

  deleteTodo(id: number) {
    this.todoArr.forEach((todo, ind) => {
      if (todo.id === id) {
        this.todoArr.splice(ind, 1);
      }
      this.todosSubject.next([...this.todoArr]);
    });
  }
}
