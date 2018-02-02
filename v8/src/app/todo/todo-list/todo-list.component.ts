import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
    newTodoTitle = '';
    todos: Todo[];
   /* readonly id: string;
    private _completed = false;
    private _title: string;*/
    constructor() {
    }

    ngOnInit() {
    }

    // get todos(): Todo[] {
    // }

    toggleCompletion(todo: Todo) {
    }

    // 만들기 eventhandler
    addTodo(title: string) {
        //  { title: 'Todo1', completed: false },
        const newTodo = {id: this.lastTodoId(), title, completed: false};
        // this.todos = [newTodo, ...this.todos];
    }

    lastTodoId(): string {
        // if length is 0
        const id = this.todos.length ? this.todos.length + 1 : 1;
        return id.toString();
    }

    removeTodo(todo: Todo) {
    }

}
