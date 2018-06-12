import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../classes/Todo';
import TodoServices from '../services/TodoServices';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [
    TodoServices
  ]
})
export class TodoListComponent implements OnInit {

  @Input()
  todoItems: Promise<Array<Todo>>;

  constructor(private todoService: TodoServices) { }

  ngOnInit() {
    this.todoItems = this.todoService.getTodos();
  }

}
