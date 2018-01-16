import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  TodoContainerComponent,
  TodoFormComponent,
  TodoNavComponent,
  TodoListComponent,
  TodoFooterComponent,
} from './components';

import { TodoFilterPipe } from './pipes';
import { TodoService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    TodoContainerComponent,
    TodoFormComponent,
    TodoNavComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoFilterPipe
  ],
  providers: [TodoService],
  exports: [TodoContainerComponent]
})
export class TodosModule { }
