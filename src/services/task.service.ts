import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Task } from './task'
@Injectable()
export class TaskService {

  public taskList = [
    {id:1, description :"wake up"},
    {id:1, description :"eat"},
    {id:1, description :"work"}
  ];

  constructor(private http: Http) { }

  getTaskList(){
    return this.taskList;
  }

}
