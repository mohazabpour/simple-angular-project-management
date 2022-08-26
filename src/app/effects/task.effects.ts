import { TaskActionsNames } from "../actions/task.actions";
import * as taskActions from "../actions/task.actions";
import List from '../../assets/data.json';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from 'rxjs/operators';


@Injectable()
export class taskEffects {
  constructor(
    private readonly actions$: Actions,
  ) {}
  public readonly loadList$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActionsNames.LoadList),
      switchMap(() => of(List)),
      map((data: any) => taskActions.LoadListSuccess({ data })),
      catchError((error: string | null) =>
        of(taskActions.LoadListFailure({ error }))
      )
    );
  });
  public readonly addTask$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActionsNames.AddTask),
      map((data: any) => {
        const task: Task = data.data;
        return taskActions.AddTaskSuccess({ data: task });
      }),
      catchError((error: string | null) =>
        of(taskActions.AddTaskFailure({ error }))
      )
    );
  });
  public readonly removeTask$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActionsNames.RemoveTask),
      map((data: any) => {
        const task: Task = data.data;
        return taskActions.RemoveTaskSuccess({ data: task });
      }),
      catchError((error: string | null) =>
        of(taskActions.RemoveTaskFailure({ error }))
      )
    );
  });
  public readonly editTask$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActionsNames.EditTask),
      map((data: any) => {
        const task: Task = data.data;
        return taskActions.EditTaskSuccess({ data: task });
      }),
      catchError((error: string | null) =>
        of(taskActions.EditTaskFailure({ error }))
      )
    );
  });
  public readonly dragStartTask$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActionsNames.DragStartTask),
      map((data: any) => {
        const task: Task = data.data;
        return taskActions.DragStartTaskSuccess({ data: task });
      }),
      catchError((error: string | null) =>
        of(taskActions.DragStartTaskFailure({ error }))
      )
    );
  });
  public readonly dropTask$: Observable<any> = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActionsNames.DropTask),
      map((data: any) => (taskActions.DropTaskSuccess({ data }))),
      catchError((error: string | null) =>
        of(taskActions.DropTaskFailure({ error }))
      )
    );
  });
}