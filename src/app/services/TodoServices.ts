import { Todo } from "../classes/Todo";
import TodoApi from "./TodoApi";
import { Injectable } from "@angular/core";
import { ApiServiceService } from "./api/api-service.service";

@Injectable()
export default class TodoServices {

    constructor(private todoApi: ApiServiceService) { }
    getTodos(): Promise<Array<Todo>> {
        //return this.todoApi.fetchTodos();
        return this.todoApi.getTodos();
    }

    addTodo(todo: Todo) {
        this.todoApi.postTodo(todo);
    }

    removeTodo(todo: Todo) {
        //this.todoApi.removeTodo(todo);
        this.todoApi.deleteTodo(todo.id);
    }

    majTodo(todo: Todo) {
        this.todoApi.putTodo(todo);
    }
}