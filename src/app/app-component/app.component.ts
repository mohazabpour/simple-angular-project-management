import { Component, OnInit } from '@angular/core';
import { filter, switchMap } from 'rxjs/operators';

import { TaskFacade } from '../task.facade';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Angular Project Management Board';
  theList: object[];
  
  addTask(theTask: object){
   this.taskFacade.addTask(theTask);
  }

  deleteTask(theTask: object){
    this.taskFacade.removeTask(theTask);
  }

  updateTask(taskInfo: any = {}){
    this.taskFacade.editTask(taskInfo);
  }

  onDragStart(event:any) {
    this.taskFacade.dragStartTask(event);
    }
  onDrop(event: any) {
  this.taskFacade.dropTask(event);
    }

  constructor(private taskFacade: TaskFacade ) {}

  ngOnInit(): void {
    this.taskFacade.loadList();
    this.taskFacade.loaded$
      .pipe(
        filter((isLoaded: boolean) => isLoaded === true),
        switchMap(() => this.taskFacade.List$)
      )
      .subscribe((task: any) => {
        this.theList = task;
      });
  }

}
