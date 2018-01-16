import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'todo-list',
  template: `
   <ul class="list-group">
      <li class="list-group-item"
        *ngFor="let todo of (todos | todoFilter : selectedNavItem)">
        <div class="hover-anchor">
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right"
              (click)="removeTodo.emit(todo.id)"></span>
          </a>
          <label class="i-checks" [for]="todo.id">
            <input type="checkbox" [id]="todo.id"
              (change)="toggleCompleted.emit(todo.id)"
              [checked]="todo.completed"><i></i>
            <span>{{todo.content}}</span>
          </label>
        </div>
      </li>
    </ul>
  `
})
export class TodoListComponent {
  @Input() todos;
  @Input() selectedNavItem;
  @Output() removeTodo = new EventEmitter();
  @Output() toggleCompleted = new EventEmitter();
}

// (todos | filterTodo: selectedNavItem)