import { Component, OnInit } from '@angular/core';
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
  private _todos: Array<Todo>;
  constructor(private todoService: TodoServices) { }

  /**
   * Getter todos
   * @return {Array<Todo>}
   */
  public get todos(): Array<Todo> {
    return this._todos;
  }

  /**
   * Setter todos
   * @param {Array<Todo>} value
   */
  public set todos(value: Array<Todo>) {
    this._todos = value;
  }

  ngOnInit() {
    this.todoService.getTodos().then(value => this._todos = value);
  }
}
