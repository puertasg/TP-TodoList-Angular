import { Todo } from "../classes/Todo";
import { ApiServiceService } from "./api/api-service.service";
import { Injectable } from "@angular/core";

@Injectable()
export default class TodoApi {

    constructor(private apiService: ApiServiceService) { }

    private _todos: Array<Todo> = [];
    fetchTodos(): Promise<Array<Todo>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this._todos)
            }, 1);
        });
    }

    addTodo(todo: Todo) {
        this._todos.push(todo);
    }

    removeTodo(todoDel: Todo) {
        this._todos.splice(this._todos.indexOf(todoDel), 1);
    }
}