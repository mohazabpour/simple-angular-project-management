import { Component, Input,Output, EventEmitter, Inject } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
@Component({
  selector: 'app-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.css']
})
export class LaneComponent {
  @Input() laneTaskList: any = [];
  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() DndDropEvent = new EventEmitter();
  @Output() DragStart = new EventEmitter();


  constructor(@Inject('lanesToken') public lanesList: any) {}
  handleDelete(theTask: object){
    this.deleteEvent.emit(theTask);
  }

  handleUpdate(taskInfo: any = {}){
    this.updateEvent.emit(taskInfo);
  }

  //DnD Dropzone
  
  handleDrop(event:DndDropEvent) {
    this.DndDropEvent.emit(event);
  }

  //DnD Draggable
  handleDragStart(event:DragEvent) {
    this.DragStart.emit(event);
  }
  

}
