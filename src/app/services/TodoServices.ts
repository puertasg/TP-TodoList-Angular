import { Todo } from "../classes/Todo";
import TodoApi from "./TodoApi";
import { Injectable } from "@angular/core";

@Injectable()
export default class TodoServices {

    constructor(private todoApi: TodoApi) { }
    getTodos(): Array<Todo> {
        return this.todoApi.fetchTodos();
    }

    addTodo(todo: Todo) {
        this.todoApi.addTodo(todo);
    }

    removeTodo(todo: Todo) {
        this.todoApi.removeTodo(todo);
    }
}