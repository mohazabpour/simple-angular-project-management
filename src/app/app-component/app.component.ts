import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DndDropEvent } from 'ngx-drag-drop';
import { without, findIndex } from 'lodash';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Angular Project Management Board';
  theList: any;
  Lanes :  object = [
    { id: 1, title: 'To Do' },
    { id: 2, title: 'Implementing' },
    { id: 3, title: 'Done' },
  ];
  theTask: any;
  
  addTask(theTask: object){
    this.theList.unshift(theTask);
  }

  deleteTask(theTask: object){
    this.theList = without(this.theList, theTask);
  }

  updateTask(taskInfo: any = {}){
    let taskIndex: number;
    taskIndex = findIndex(this.theList, { id: taskInfo.theTask.id });
    this.theList[taskIndex][taskInfo.labelName] = taskInfo.newValue;
  }

  //DnD
    //Draggable
      onDragStart(event:any) {
        this.theTask = event;
        console.log("drag started", JSON.stringify(event, null, 2));
      }

    //Dropzone
      onDragover(event:DragEvent) {

        console.log("dragover", JSON.stringify(event, null, 2));
      }
      
      onDrop(event: any) {
      let taskIndex: number;
      taskIndex = findIndex(this.theList, { id: this.theTask.id });
      this.theTask.lane = event.id;
        console.log("dropped", JSON.stringify(event, null, 2));
      }

  constructor(private http: HttpClient ) {}

  ngOnInit(): void {
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {
      this.theList = data;
    });
  }
}
