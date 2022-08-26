import { createAction, props } from '@ngrx/store';

export enum TaskActionsNames {
  Init = '[Task] Init',
  LoadList = '[Task] Load List',
  LoadListSuccess = '[Task] Load List Success',
  LoadListFailure = '[Task] Load List Failure',
  AddTask = '[Task] Add Task',
  AddTaskSuccess = '[Task] Add Task Success',
  AddTaskFailure = '[Task] Add Task Failure',
  RemoveTask = '[Task] Remove Task',
  RemoveTaskSuccess = '[Task] Remove Task Success',
  RemoveTaskFailure = '[Task] Remove Task Failure',
  EditTask = '[Task] Edit Task',
  EditTaskSuccess = '[Task] Edit Task Success',
  EditTaskFailure = '[Task] Edit Task Failure',
  DragStartTask = '[Task] DragStart Task',
  DragStartTaskSuccess = '[Task] DragStart Task Success',
  DragStartTaskFailure = '[Task] DragStart Task Failure',
  DropTask = '[Task] Drop Task',
  DropTaskSuccess = '[Task] Drop Task Success',
  DropTaskFailure = '[Task] Drop Task Failure',
}
export const Init = createAction(TaskActionsNames.Init);

export const LoadList = createAction(TaskActionsNames.LoadList);

export const LoadListSuccess = createAction(
  TaskActionsNames.LoadListSuccess,
  props<{ data: Task[] }>()
);

export const LoadListFailure = createAction(
  TaskActionsNames.LoadListFailure,
  props<{ error: string | null }>()
);


export const AddTask = createAction(
  TaskActionsNames.AddTask,
  props<{ data: Task }>()
);

export const AddTaskSuccess = createAction(
  TaskActionsNames.AddTaskSuccess,
  props<{ data: Task }>()
);

export const AddTaskFailure = createAction(
  TaskActionsNames.AddTaskFailure,
  props<{ error: string | null }>()
);
export const RemoveTask = createAction(
  TaskActionsNames.RemoveTask,
  props<{ data: Task }>()
);

export const RemoveTaskSuccess = createAction(
  TaskActionsNames.RemoveTaskSuccess,
  props<{ data: Task }>()
);

export const RemoveTaskFailure = createAction(
  TaskActionsNames.RemoveTaskFailure,
  props<{ error: string | null }>()
);
export const EditTask = createAction(
  TaskActionsNames.EditTask,
  props<{ data: Task }>()
);

export const EditTaskSuccess = createAction(
  TaskActionsNames.EditTaskSuccess,
  props<{ data: any }>()
);

export const EditTaskFailure = createAction(
  TaskActionsNames.EditTaskFailure,
  props<{ error: string | null }>()
);
export const DragStartTask = createAction(
  TaskActionsNames.DragStartTask,
  props<{ data: any }>()
);

export const DragStartTaskSuccess = createAction(
  TaskActionsNames.DragStartTaskSuccess,
  props<{ data: any }>()
);

export const DragStartTaskFailure = createAction(
  TaskActionsNames.DragStartTaskFailure,
  props<{ error: string | null }>()
);
export const DropTask = createAction(
  TaskActionsNames.DropTask,
  props<{ data: any }>()
);

export const DropTaskSuccess = createAction(
  TaskActionsNames.DropTaskSuccess,
  props<{ data: any }>()
);

export const DropTaskFailure = createAction(
  TaskActionsNames.DropTaskFailure,
  props<{ error: string | null }>()
);