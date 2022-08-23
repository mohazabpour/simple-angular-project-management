import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrashCan, faGripVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() taskList: object[] = [];
  @Input() taskLane: any = [];
  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  showDelete: boolean = false;
  faTrashCan = faTrashCan;
  faGripVertical = faGripVertical;

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
  onTaskMouseover(): void {
    this.showDelete = true;
  }
  
  onTaskMouseout(): void {
    this.showDelete = false;
  }
  constructor(){}

}
