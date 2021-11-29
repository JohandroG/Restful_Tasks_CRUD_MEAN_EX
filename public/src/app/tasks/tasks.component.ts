import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

title: string = ""

alltasks:any[] = [];

task:any = {};




  constructor(private _HttpService: TasksService) { 
    
  }

  ngOnInit(): void {
    this.displayAllTasks();
  }

  displayAllTasks():void{
    this._HttpService.requestTasks()
    .subscribe((data:any) => {
      console.log(this.alltasks);
      this.alltasks = data;
      console.log(this.alltasks);
    });
  }

  findTask(event:any):void{
    event.preventDefault();
    this.title = event.target.title.value;
    this._HttpService.selectTask(this.title)
    .subscribe((data:any) => {
      this.task = data;
    });
    console.log(this.task);
  }



}
