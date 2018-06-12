import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../classes/Todo';

const API_BASE_URL: string = "http://localhost:3000/";
const API_TODOS: string = "todos/";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Array<Todo>>(`${API_BASE_URL}${API_TODOS}`).toPromise();
  }

  getTodoById(id: number) {
    return this.http.get<Todo>(`${API_BASE_URL}${API_TODOS}/${id}`).toPromise();
  }

  postTodo(todo: Todo) {
    return this.http.post(`${API_BASE_URL}${API_TODOS}`, JSON.stringify(todo)).toPromise();
  }

  deleteTodo(id: number) {
    return this.http.delete(`${API_BASE_URL}${API_TODOS}/${id}`).toPromise();
  }

  putTodo(todo: Todo) {
    return this.http.put(`${API_BASE_URL}${API_TODOS}/${todo.id}`, JSON.stringify(todo)).toPromise();
  }
}
