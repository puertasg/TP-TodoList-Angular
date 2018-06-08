import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../classes/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  barTitle() {
    this.todo.isDone = !this.todo.isDone;
  }
}
