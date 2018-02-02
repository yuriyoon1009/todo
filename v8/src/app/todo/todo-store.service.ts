import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { StorageService } from '../core/storage.service';


// Get todos from storage by item name.
const STORAGE_ITEM_NAME = 'ANGULAR_EXERCISE_TODO_STORAGE';


@Injectable()
export class TodoStoreService {
    private _todos: Todo[] = [];

    constructor(private storageService: StorageService) {
    }

   // get todos(): Todo[] {
   // }

   // get remainTodos(): Todo[] {
   // }

   // get completedTodos(): Todo[] {
   // }

    getAllTodosFromStorage() {
    }

    add(title: string) {
    }

    remove(todo: Todo) {
    }

    toggleCompletion(todo: Todo) {
    }

    private updateStorage() {
    }
}
