import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
    newTodoTitle = '';
    todos: any = [];
   /* readonly id: string;
    private _completed = false;
    private _title: string;*/
    constructor() {
    }

    ngOnInit() {
    }

    addTodo() {
        if (!this.newTodoTitle) {return; }
        const newTodo = new Todo(this.newTodoTitle, false);
        this.todos = [newTodo, ...this.todos];
        this.newTodoTitle = '';
        console.log('[addNewTodo] : ', this.todos);
    }

    removeTodo(id: string) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        console.log('[removeTodo]', this.todos);
    }

    // app-todo-item
    onToggleTodo(id: string) {
        this.todos = this.todos.map((todo, i) => {
            return todo.id === id ? Object.assign(todo, {_completed: !todo._completed}) : todo;
        });
       console.log('[changeCompleted] : ', this.todos);
    }

    onRemoveTodo(id: string) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        console.log('[removeTodo]', this.todos);
    }

    // town
    // removeTodo(todo: Todo) {
    // }

    // toggleCompletion(todo: Todo) {
    // }

    // get todos(): Todo[] {
    // }
}
