import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing } from './/app-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';

import {TaskService} from '../services/task.service'


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
