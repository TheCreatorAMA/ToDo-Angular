import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { TodoService } from "./todo-items.service";

@Component({
    selector: 'app-todo-items',
    templateUrl: './todo-items.component.html',
    styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit, OnDestroy {
    items: string[];
    newItemForm: FormGroup;
    itemsSub: Subscription;

    constructor(private todoService: TodoService) {}

    ngOnInit() {
        this.items = this.todoService.getItems();
        this.itemsSub = this.todoService.itemsChanged.subscribe(
            (items: string[]) => {
                this.items = items;
        })

        this.newItemForm = new FormGroup({
            'newItem': new FormControl(null)
        });
    }

    ngOnDestroy() {
        this.itemsSub.unsubscribe();
    }

    onAddItem() {
        this.todoService.addItem(this.newItemForm.get('newItem').value);
    }
}