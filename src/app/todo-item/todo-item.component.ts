import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../classes/Todo';
import TodoServices from '../services/TodoServices';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  providers: [
    TodoServices
  ]
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  todoDeleted:EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoServices) { }

  ngOnInit() {
  }

  barTitle() {
    this.todo.isDone = !this.todo.isDone;
    this.todoService.majTodo(this.todo);
  }

  deleteTodo() {
    this.todoService.removeTodo(this.todo);
    this.todoDeleted.emit();
  }
}
