import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule  } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DndModule } from 'ngx-drag-drop';

import { AppComponent } from './app-component/app.component';
import { AddComponent } from './components/add/add.component';
import { LaneComponent } from './components/lane/lane.component';
import { TaskComponent } from './components/task/task.component';

import { TaskDeleteDirective } from './components/task/task-delete.directive';
import { TaskGrabDirective } from './components/task/task-grab.directive';
import { TaskFilterPipe } from './components/task/task-filter.pipe';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers/task.reducer';
import { TaskFacade } from './task.facade';

import { taskEffects } from './effects/task.effects';
import { LIST_FEATURE_KEY } from './taskList.state';

const lanesList: Array<any> = [
  { id: 1, title: 'To Do' },
  { id: 2, title: 'Implementing' },
  { id: 3, title: 'Done' },
];
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
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
    DndModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(LIST_FEATURE_KEY, reducer),
    EffectsModule.forRoot([taskEffects]),
  ],
  providers: [TaskFacade, {provide: 'lanesToken', useValue: lanesList}],
  bootstrap: [AppComponent]
})
export class AppModule { }
