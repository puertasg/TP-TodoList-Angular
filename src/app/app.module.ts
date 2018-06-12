import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule } from "@angular/forms";
import TodoApi from './services/TodoApi';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddJsonInterceptorService } from './services/interceptors/add-json-interceptor.service';
import { TodoContainerComponent } from './todo-container/todo-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    TodoContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TodoApi,
    { provide: HTTP_INTERCEPTORS, useClass: AddJsonInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
