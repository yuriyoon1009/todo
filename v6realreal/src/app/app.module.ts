import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo-container.component';
import { TodoInputComponent } from './todo-input.component';
import { TodoSelectComponent } from './todo-select.component';
import { TodoListComponent } from './todo-list.component';
import { TodoFilterPipe } from './todo-filter.pipe';
import { TodoFooterComponent } from './todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoInputComponent,
    TodoSelectComponent,
    TodoListComponent,
    TodoFilterPipe,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
