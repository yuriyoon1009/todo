import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../services';

@Component({
  selector: 'todo-list',
  template: `
    <ul class="list-group">
      <li class="list-group-item"
        *ngFor="let todo of (todoService.todos | todoFilter: statusNav)">
        <div class="hover-anchor">
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right"
              (click)="todoService.removeById(todo.id)"></span>
          </a>
          <label class="i-checks" [for]="todo.id">
            <input type="checkbox" [id]="todo.id"
              (change)="todoService.updateById(todo.id)"
              [checked]="todo.completed"><i></i>
            <span>{{todo.content}}</span>
          </label>
        </div>
      </li>
    </ul>
  `
})
export class TodoListComponent {

  @Input() statusNav: string;

  constructor(public todoService: TodoService) { }
}
