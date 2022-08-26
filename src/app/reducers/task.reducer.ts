import { taskState, initialListState } from '../taskList.state';
import * as taskActions from '../actions/task.actions';
import { Action, createReducer, on } from '@ngrx/store';

const taskListReducer: any = createReducer(
  initialListState,
  on(taskActions.Init, (state) => ({ ...state, loaded: false, error: null })),
  on(taskActions.LoadList, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(taskActions.LoadListSuccess, (state, { data }) => ({
    ...state,
    taskList: data,
    loaded: true,
    error: null,
  })),
  on(taskActions.LoadListFailure, (state, { error }) => ({ ...state, error })),
  on(taskActions.AddTask, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(taskActions.AddTaskSuccess, (state, { data }) => {
    let list = [...state.taskList];
    list.unshift(data);
    return {
      ...state,
      taskList: list,
      loaded: true,
      error: null,
    };
  }),
  on(taskActions.RemoveTask, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(taskActions.RemoveTaskSuccess, (state, { data }) => {
    let taskIndex: number;
    let list = [...state.taskList];
    taskIndex = list.indexOf(data);
    (( taskIndex >=0 ) && list.splice(taskIndex,1));
    return {
      ...state,
      taskList: list,
      loaded: true,
      error: null,
    };
  }),
  on(taskActions.EditTask, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(taskActions.EditTaskSuccess, (state, { data }) => {
    let taskIndex: number;
    let mutablelist = JSON.parse(JSON.stringify(state.taskList));
    let list = [...state.taskList];
    taskIndex = list.indexOf(data.theTask);
    mutablelist[taskIndex][data.labelName] = data.newValue;
    return {
      ...state,
      taskList: list,
      loaded: true,
      error: null,
    };
  }),
  on(taskActions.DragStartTask, (state) => {
    return{
    ...state,
    loaded: false,
    error: null,
  }}),
  on(taskActions.DragStartTaskSuccess, (state, { data }) => {
    let task = JSON.parse(JSON.stringify(state.task));
    task = data;
    return {
      ...state,
      task: task,
      loaded: true,
      error: null,
    };
  }),
  on(taskActions.DropTask, (state) => {
    return{
    ...state,
    loaded: false,
    error: null,
  }}),
  on(taskActions.DropTaskSuccess, (state, { data }) => {
    let taskIndex: number;
    let list = [...state.taskList];
    let task = state.task ;
    let mutablelist = JSON.parse(JSON.stringify(state.taskList));
    taskIndex = list.indexOf(task);
    if( taskIndex >=0 ){
      mutablelist[taskIndex].lane = data.data.id;
    };
    return {
      ...state,
      taskList: mutablelist,
      loaded: true,
      error: null,
    };
  })
);

export function reducer(state: taskState | undefined, action: Action) {
  return taskListReducer(state, action);
}

