import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Todo } from './models/todo';

@Component({
  selector: 'todo-container',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1 class="title">Todos</h1>

         <todo-input (addTodo)="addTodo($event)"></todo-input>
        
         <ng-container *ngIf="todos">
           <todo-select
           [navItems]="navItems"
           [selectedNavItem]="selectedNavItem"
           (setCurrentNavItem)="setCurrentNavItem($event)"></todo-select>
  
           <todo-list
           [todos]="todos"
           [selectedNavItem]="selectedNavItem"
           (removeTodo)="removeTodo($event)"
           (toggleCompleted)="toggleComplete($event)"></todo-list>
  
           <todo-footer
           (toggleAllTodoAsComplete)="toggleAllTodo($event)"
           (removeCompletedTodos)="removeCompletedTodos()"
           [todos]="todos">
           </todo-footer>
         </ng-container>

        </div>
      </div>
    </div>
  `
})
export class TodoContainerComponent implements OnInit {

  todos: Todo[];
  // navigation items
  navItems = ['All', 'Active', 'Completed'];
  // 선택된 navigation item
  selectedNavItem: string;
  appUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.getTodos();
    this.selectedNavItem = this.navItems[0];
  }

  getTodos() {
    this.http.get<Todo[]>(this.appUrl)
      .subscribe(todos => this.todos = todos);
  }

  addTodo(content: string) {
    // const id: number = this.todos.length ? this.lastTodoId() : 1;
    const newTodo = { id: this.lastTodoId(), content, completed: false };

    this.http.post(this.appUrl, newTodo)
      .subscribe(() => this.todos = [newTodo, ...this.todos]);

    // this.todos = [newTodo, ...this.todos];
  }
  
  removeTodo(id: number) {
    // https://github.com/angular/angular/issues/18396
    this.http.delete(`${this.appUrl}/id/${id}`, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.filter(todo => todo.id !== id));

    // this.todos = this.todos.filter(todo => todo.id !== id);
  }

  removeCompletedTodos() {
    this.http.delete(`${this.appUrl}/completed`, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.filter(todo => !todo.completed));

    // this.todos = this.todos.filter(todo => todo.completed !== true);
  }

  toggleComplete(id: number) {
    const { completed } = this.todos.find(todo => todo.id === id);
    const payload = { completed: !completed };

    this.http.patch(`${this.appUrl}/id/${id}`, payload, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.map(todo => {
        return todo.id === id ? Object.assign(todo, { completed: !completed }) : todo;
      }));

    // this.todos = this.todos.map(todo => {
    //   return todo.id === id ? Object.assign(todo, { completed: !todo.completed }) : todo;
    // });
  }

  toggleAllTodo(completed: boolean) {
    this.http.patch(`${this.appUrl}`, { completed }, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.map(todo => {
        return Object.assign(todo, { completed });
      }));

    // this.todos = this.todos.map(todo => Object.assign(todo, { completed }));
  }

  setCurrentNavItem(selectedNavItem: string) {
    this.selectedNavItem = selectedNavItem;
  }

  private lastTodoId(): number {
    return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }
}
