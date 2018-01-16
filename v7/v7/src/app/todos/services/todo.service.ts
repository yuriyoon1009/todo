import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  appUrl = environment.apiUrl;
  todos: Todo[];

  constructor(private http: HttpClient) {
    console.log('[appUrl] ', this.appUrl);
    this.findAll();
  }

  findAll() {
    this.http.get<Todo[]>(this.appUrl)
      .subscribe(todos => this.todos = todos);
  }

  create(content: string) {
    const newTodo = { id: this.lastTodoId(), content, completed: false };
    this.http.post(this.appUrl, newTodo)
      .subscribe(() => this.todos = [newTodo, ...this.todos]);
  }

  removeById(id: number) {
    // https://github.com/angular/angular/issues/18396
    this.http.delete(`${this.appUrl}/id/${id}`, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.filter(todo => todo.id !== id));
  }

  removeByCompleted() {
    this.http.delete(`${this.appUrl}/completed`, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.filter(todo => !todo.completed));
  }

  updateById(id: number) {
    const { completed } = this.todos.find(todo => todo.id === id);

    this.http.patch(`${this.appUrl}/id/${id}`, { completed: !completed }, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.map(todo => {
        return todo.id === id ? Object.assign(todo, { completed: !completed }) : todo;
      }));
  }

  updateAll(completed: boolean) {
    this.http.patch(`${this.appUrl}`, { completed }, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.map(todo => {
        return Object.assign(todo, { completed });
      }));
  }

  private lastTodoId(): number {
    return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }
}
