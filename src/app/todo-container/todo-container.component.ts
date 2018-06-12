import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/Todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todoItems: Promise<Array<Todo>>;

  constructor() { }

  ngOnInit() {
  }
}
