import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';


@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;
    @Output() toggle = new EventEmitter<Todo>();
    @Output() remove = new EventEmitter<Todo>();

    constructor() {
    }

    ngOnInit() {
    }

    onToggleTodo() {
        this.toggle.emit(this.todo);
    }

    onRemoveTodo() {
        this.remove.emit(this.todo);
    }
}
