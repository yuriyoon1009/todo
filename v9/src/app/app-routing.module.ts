import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoListRxComponent } from './todo/todo-list-rx/todo-list-rx.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: TodoListComponent
    },
    {
        path: 'rx',
        component: TodoListRxComponent
    },
    {
        path: 'item',
        component: TodoItemComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
