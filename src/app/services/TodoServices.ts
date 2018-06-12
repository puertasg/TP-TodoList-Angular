import { Todo } from "../classes/Todo";
import TodoApi from "./TodoApi";
import { Injectable } from "@angular/core";

@Injectable()
export default class TodoServices {

    constructor(private todoApi: TodoApi) { }
    getTodos(): Promise<Array<Todo>> {
        //return this.todoApi.fetchTodos();
        return this.todoApi.fetchTodosServer();
    }

    addTodo(todo: Todo) {
        this.todoApi.addTodoServer(todo);
    }

    removeTodo(todo: Todo) {
        //this.todoApi.removeTodo(todo);
        this.todoApi.deleteTodoById(todo.id);
    }

    majTodo(todo: Todo) {
        this.todoApi.updateTodo(todo);
    }
}