import { Component, Input,Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

import { DndDropEvent } from 'ngx-drag-drop';
@Component({
  selector: 'app-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.css']
})
export class LaneComponent implements OnChanges  {
  @Input() taskLanes: any = [];
  @Input() laneTaskList: any = [];
  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() DragEvent = new EventEmitter();
  @Output() DndDropEvent = new EventEmitter();
  @Output() DragStart = new EventEmitter();


  constructor() {}
  handleDelete(theTask: object){
    this.deleteEvent.emit(theTask);
  }

  handleUpdate(taskInfo: any = {}){
    this.updateEvent.emit(taskInfo);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.laneTaskList);
  }

  //DnD Dropzone
  handleDragover(event:DragEvent) {
    this.DragEvent.emit(event);
  }
  
  handleDrop(event:DndDropEvent) {
  
    this.DndDropEvent.emit(event);
  }

  //DnD Draggable
  handleDragStart(event:DragEvent) {
    this.DragStart.emit(event);
  }
  

}
