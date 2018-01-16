import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from './models/todo';

@Component({
  selector: 'todo-footer',
  template: `
     <div class="col-xs-6">
      <label class="i-checks" style="padding-left: 20px">
        <input type="checkbox"
          (change)="toggleAllTodoAsComplete.emit($event.target.checked)">
          <i></i><span>Mark all as complete</span>
      </label>
    </div>
    <div class="col-xs-6 text-right">
      <button class="btn btn-default btn-xs"
        (click)="removeCompletedTodos.emit()">
        Clear completed (<span>{{ getCntCompletedTodos }}</span>)
      </button>
      <strong>{{ getCntActiveTodos }}</strong>
      {{ getCntActiveTodos > 1 ? 'items' : 'item' }} left
    </div>
  `
})
export class TodoFooterComponent {
  @Output() toggleAllTodoAsComplete = new EventEmitter();
  @Output() removeCompletedTodos = new EventEmitter();

  getCntCompletedTodos: number;
  getCntActiveTodos: number;

  @Input()
  set todos(todos: Todo[]){
    if(!todos) return;

    this.getCntCompletedTodos = todos.filter(todo => todo.completed).length;
    this.getCntActiveTodos = todos.filter(todo => !todo.completed).length;
  }
 
  
}
