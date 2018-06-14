import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/Todo';
import TodoServices from '../services/TodoServices';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
  providers: [
    TodoServices
  ]
})
export class TodoContainerComponent implements OnInit {

  todoItems: Promise<Array<Todo>>;

  constructor(private todoService: TodoServices) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.todoItems = this.todoService.getTodos();
  }
}
