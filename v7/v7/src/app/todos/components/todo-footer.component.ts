import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../services';

@Component({
  selector: 'todo-footer',
  template: `
    <div class="col-xs-6">
      <label class="i-checks" style="padding-left: 20px">
        <input type="checkbox"
          (change)="todoService.updateAll($event.target.checked)">
          <i></i><span>Mark all as complete</span>
      </label>
    </div>
    <div class="col-xs-6 text-right">
      <button class="btn btn-default btn-xs"
        (click)="onClick()">
        Clear completed (<span>{{ getCntCompletedTodos() }}</span>)
      </button>
      <strong>{{ getCntActiveTodos() }}</strong>
        {{ getCntActiveTodos() > 1 ? 'items' : 'item' }} left
    </div>
  `
})
export class TodoFooterComponent {

  constructor(public todoService: TodoService) { }

  onClick() {
    if (this.getCntCompletedTodos()) {
      this.todoService.removeByCompleted();
    }
  }

  getCntCompletedTodos() {
    return this.todoService.todos.filter(({ completed }) => completed).length;
  }

  getCntActiveTodos() {
    return this.todoService.todos.length - this.getCntCompletedTodos();
  }

}
