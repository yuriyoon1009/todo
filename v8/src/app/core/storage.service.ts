import { Injectable } from '@angular/core';


@Injectable()
export class StorageService {
    storage = window.localStorage;

    has(name: string): boolean {
        return this.get(name) !== null;
    }

    get(name: string): any {
        const item = this.storage.getItem(name);

        try {
            return JSON.parse(item);
        } catch (err) {
            return null;
        }
    }

    set(name: string, value: any) {
        this.storage.setItem(name, JSON.stringify(value));
    }

    remove(name: string) {
        this.storage.removeItem(name);
    }
}
