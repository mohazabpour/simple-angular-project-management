import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule  } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DndModule } from 'ngx-drag-drop';

import { AppComponent } from './app-component/app.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { LaneComponent } from './components/lane/lane.component';
import { TaskComponent } from './components/task/task.component';

import { TaskDeleteDirective } from './components/task/task-delete.directive';
import { TaskGrabDirective } from './components/task/task-grab.directive';
import { TaskFilterPipe } from './components/task/task-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    LaneComponent,
    TaskComponent,
    TaskFilterPipe,
    TaskDeleteDirective,
    TaskGrabDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
