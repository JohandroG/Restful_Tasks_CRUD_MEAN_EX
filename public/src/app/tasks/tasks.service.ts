import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TasksComponent} from './tasks.component'

@Injectable({
  providedIn: 'root'
})

export class TasksService {

alltasks:any[] = [];
task:Object = {};

  constructor(private _http: HttpClient) {
    this.requestTasks();
  }

  requestTasks(){
    return this._http.get("http://localhost:8080/tasks")
  }

  selectTask(title:string){
    return this._http.get(`http://localhost:8080/tasks/${title}`)
  }

  editTask(title:string, editedTask:any){
    return this._http.put(`http://localhost:8080/tasks/${title}`,editedTask)
  }

  postTask(newTask:any){
    return this._http.post(`http://localhost:8080/tasks`,newTask)
  }

  removeTask(title:string){
    return this._http.delete(`http://localhost:8080/tasks/${title}`)
  }

}
