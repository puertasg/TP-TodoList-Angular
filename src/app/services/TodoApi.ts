import { Todo } from "../classes/Todo";
import { ApiServiceService } from "./api/api-service.service";

export default class TodoApi {

    constructor(private apiService:ApiServiceService){}

    private _todos: Array<Todo> = [];
    fetchTodos(): Array<Todo> {
        this.apiService.getTodos().toPromise().then(data => {
            this._todos = data;
        });
        return this._todos;
    }

    getTodo(){
        
    }

    addTodo(todo: Todo) {
        this._todos.push(todo);
    }

    removeTodo(todoDel: Todo) {
        this._todos.splice(this._todos.indexOf(todoDel), 1);
    }
}