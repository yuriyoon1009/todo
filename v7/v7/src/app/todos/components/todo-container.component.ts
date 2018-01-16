import { Component } from '@angular/core';
import { TodoService } from '../services';

@Component({
  selector: 'todo-container',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1 class="title">Todos</h1>

          <todo-form></todo-form>

          <ng-container *ngIf="todoService.todos">
            <todo-nav
              [navItems]="navItems"
              [statusNav]="selectedNavItem"
              (changeStatusNav)="selectedNavItem=$event"></todo-nav>

            <todo-list [statusNav]="selectedNavItem"></todo-list>

            <todo-footer></todo-footer>
          </ng-container>
          <div class="col-md-12" style="margin-top: 30px">
            <pre>{{todoService.todos | json}}</pre>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TodoContainerComponent {
  // navigation items
  navItems = ['All', 'Active', 'Completed'];
  // 선택된 navigation item
  selectedNavItem: string = this.navItems[0];

  constructor(public todoService: TodoService) {}
}
