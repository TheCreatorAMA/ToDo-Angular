import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodoService {
    itemsChanged = new Subject<string[]>();
    private items: string[] = ['to do item one', 'go to the grocery store'];

    constructor(private http: HttpClient) {}

    getItems() {
        return this.items.slice()
    }

    addItem(item: string) {
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());
    }

    setItems(items: string[]) {
        this.items = items;
        this.itemsChanged.next(this.items.slice());
    }

    storeData() {
        const items = this.items.slice()
        //subscribing instead of returning since i do not need anything to do with the response.
        this.http.put('https://todo-list-26851-default-rtdb.firebaseio.com/todo-items.json',items).subscribe(
            (response) => {
                console.log(response);
            }
        );
    }

    fetchData() {
        this.http.get('https://todo-list-26851-default-rtdb.firebaseio.com/todo-items.json').subscribe(
            (response: string[]) => {
                this.setItems(response);
            }
        );

    }
}