import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { taskState } from './taskList.state';
import * as taskSelectors from './selectors/task.selectors';
import * as taskActions from './actions/task.actions';


@Injectable()
export class TaskFacade {
  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(taskSelectors.getListLoaded)
  );
  public readonly List$: Observable<Task[]> = this.store.pipe(
    select(taskSelectors.getList)
  );

  constructor(private readonly store: Store<taskState>) {}
  public init(): void {
    this.store.dispatch(taskActions.Init());
  }
  public loadList(): void {
    this.store.dispatch(taskActions.LoadList());
  }
  public addTask(task: any): void {
    this.store.dispatch(taskActions.AddTask({ data: task }));
  }
  public removeTask(task: any): void {
    this.store.dispatch(taskActions.RemoveTask({ data: task }));
  }
  public editTask(task: any): void {
    this.store.dispatch(taskActions.EditTask({ data: task }));
  }
  public dragStartTask(task: any): void {
    this.store.dispatch(taskActions.DragStartTask({ data: task }));
  }
  public dropTask(dropLane: any): void {
    this.store.dispatch(taskActions.DropTask({ data: dropLane }));
  }

}
