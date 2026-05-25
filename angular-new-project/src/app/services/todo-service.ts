import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: any;
  value: string;
}

const initialTodos = [
  { id: 1, value: 'Complete Angular Assignment' },
  { id: 2, value: 'Learn Java Stream API' },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoSubject = new BehaviorSubject<Todo[]>(initialTodos);
  readonly todoObs = this.todoSubject.asObservable();
  private todoArr: Todo[] = this.todoSubject.value;
  private nextId = 3;

  addNewTodo(item: any) {
    item.id = this.nextId++;
    this.todoArr.push(item);
    this.todoSubject.next([...this.todoArr]);
  }
}
