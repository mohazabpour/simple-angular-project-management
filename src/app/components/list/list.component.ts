import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() taskList: any;
  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  faTrashCan = faTrashCan;

  handleDelete(theTask: object){
    this.deleteEvent.emit(theTask);
  }

  handleUpdate(theTask: object, labelName: string, newValue: string){
    this.updateEvent.emit({
      theTask: theTask,
      labelName: labelName,
      newValue: newValue
    });
  }

}
