import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { without, findIndex } from 'lodash';
import { NonNullableFormBuilder } from '@angular/forms';


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
  
  addTask(theTask: any){
    this.theList.unshift(theTask);
  }

  constructor(private http: HttpClient ) {}

  ngOnInit(): void {
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {
      this.theList = data;
    });

  }
}
