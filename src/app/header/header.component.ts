import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-items/todo-items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  saveData() {
    this.todoService.storeData();
  }

  grabData() {
    this.todoService.fetchData();
  }

}
