import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodoService {
    itemsChanged = new Subject<string[]>();
    private items: string[] = ['to do item one', 'go to the grocery store'];

    getItems() {
        return this.items.slice()
    }

    addItem(item: string) {
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());
    }

}