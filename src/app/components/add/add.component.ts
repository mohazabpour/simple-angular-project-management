import { Component,OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { faPlus ,faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  form!: FormGroup;
  showForm: boolean;
  faPlus = faPlus;
  faMinus = faMinus;

  @Output() addEvt = new EventEmitter();

  ngOnInit(){
    this.form = this.formBuilder.group({
        taskTitle: this.formBuilder.control('', Validators.compose([
            Validators.pattern('[\\w\\-\\s\\/]+'),
            Validators.required
        ])),
        taskDesc: this.formBuilder.control('')
    });
  }

  toggleTaskDisplay(){
    this.showForm = !this.showForm;
  }

  handleAdd(formInfo: any){
    let i = 8;
    const tempItem: object = {
      id: i++,
      title: formInfo.taskTitle,
      body: formInfo.taskDesc,
      lane:1
    }
    this.addEvt.emit(tempItem);
    this.showForm = !this.showForm;
    this.form.reset();
  }

  constructor(private formBuilder: FormBuilder) { 
    this.showForm = true;
  }



}
