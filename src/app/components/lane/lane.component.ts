import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { without, findIndex } from 'lodash';
@Component({
  selector: 'app-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.css']
})
export class LaneComponent implements OnChanges  {
  @Input() taskLanes: any = [];
  @Input() laneTaskList: any = [];
  constructor() {}
  deleteTask(theTask: object){
    this.laneTaskList = without(this.laneTaskList, theTask);
  }
  updateTask(taskInfo: any = {}){
    let taskIndex: number;
    taskIndex = findIndex(this.laneTaskList, { id: taskInfo.theTask.id });
    this.laneTaskList[taskIndex][taskInfo.labelName] = taskInfo.newValue;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.laneTaskList);
  }
  
}
