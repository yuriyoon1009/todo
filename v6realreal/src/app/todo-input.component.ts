import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input class="form-control input-lg"
            placeholder="What needs to be done?"
            autofocus
            [(ngModel)]="content" (keyup.enter)="addTodoEmit()">
  `
})
export class TodoInputComponent {
  content: string;
  @Output() addTodo = new EventEmitter();
  

  addTodoEmit(){
    if(this.content){
      this.addTodo.emit(this.content);
      this.content='';
  }
}
}
