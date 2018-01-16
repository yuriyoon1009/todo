import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-select',
  template: `
     <ul class="nav nav-xs nav-pills">
        <li *ngFor="let navItem of navItems"
          [class.active]="navItem === selectedNavItem">
          <a (click)="setCurrentNavItem.emit(navItem)">{{navItem}}</a>
        </li>
      </ul>
  `
})
export class TodoSelectComponent{
  @Input() navItems;
  @Input() selectedNavItem;

  @Output() setCurrentNavItem = new EventEmitter();
  
}
