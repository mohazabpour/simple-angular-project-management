import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrashCan, faGripVertical } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() taskList: any = [];
  @Input() taskLane: any = [];
  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() DragStart = new EventEmitter();
  showDelete: boolean = false;
  faTrashCan = faTrashCan;
  faGripVertical = faGripVertical;

 //DnD
 draggable = {
  // note that data is handled with JSON.stringify/JSON.parse
  // only set simple data or POJO's as methods will be lost 
  data: "myDragData",
  effectAllowed: "move" as const,
  disable: false,
  handle: true
};

  handleDelete(theTask: object){
    this.deleteEvent.emit(theTask);
  }

  handleUpdate(theTask: any, labelName: string, newValue: string){
    this.updateEvent.emit({
      theTask: theTask,
      labelName: labelName,
      newValue: newValue
    });
  }
  //DnD
  handleDragStart(event:DragEvent) {
    this.DragStart.emit(event);
  }
  
  
  
  constructor(){}

}
