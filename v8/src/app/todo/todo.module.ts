import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListRxComponent } from './todo-list-rx/todo-list-rx.component';
import { TodoStoreRxService } from './todo-store-rx.service';
import { TodoStoreService } from './todo-store.service';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CoreModule
    ],
    declarations: [
        TodoItemComponent,
        TodoListComponent,
        TodoListRxComponent,
    ],
    providers: [
        TodoStoreService,
        TodoStoreRxService
    ],
    exports: [
        TodoListComponent,
        TodoListRxComponent
    ]
})
export class TodoModule {
}
