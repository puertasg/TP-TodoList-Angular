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

    //Version serveur REST
    fetchTodosServer(): Promise<Array<Todo>> {
        return this.apiService.getTodos().toPromise();
    }

    fetchTodoByIdServer(id: number): Promise<Todo> {
        return this.apiService.getTodoById(id).toPromise();
    }

    addTodoServer(todo: Todo) {
        return this.apiService.postTodo(todo).toPromise();
    }

    deleteTodoById(id: number){
        return this.apiService.deleteTodo(id).toPromise();
    }

    updateTodo(todo: Todo){
        return this.apiService.putTodo(todo).toPromise();
    }
}