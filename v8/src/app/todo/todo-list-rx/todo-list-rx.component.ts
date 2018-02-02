import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo';


@Component({
    selector: 'app-todo-list-rx',
    templateUrl: './todo-list-rx.component.html',
    styleUrls: ['./todo-list-rx.component.less']
})
export class TodoListRxComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    //get todos(): Observable<Todo[]> {
    //}

    toggleCompletion(todo: Todo) {
    }

    addTodo() {
    }

    removeTodo(todo: Todo) {
    }

}
