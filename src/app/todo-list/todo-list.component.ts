import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  updateEventEmitter: EventEmitter<Promise<Array<Todo>>> = new EventEmitter();

  constructor(private todoService: TodoServices) { }

  ngOnInit() {
    this.todoItems = this.todoService.getTodos();
  }

  sendEventToParent() {
    this.updateEventEmitter.emit();
  }

}
