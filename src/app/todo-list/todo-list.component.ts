import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.taskService.getTaskList()
    .subscribe(tasks => this.tasks = tasks);
  }

}
