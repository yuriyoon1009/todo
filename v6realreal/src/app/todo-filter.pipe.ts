import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], status?: string) {
    if (!todos) return;
    // 필터링된 todos를 반환한다
    return todos.filter(({ completed }) => {
      switch (status) {
        case 'Active': console.log('active');return completed === false;
        case 'Completed': return completed === true;
        default: return true;
      }
    });
  }

}
