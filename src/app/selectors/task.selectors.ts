import { createFeatureSelector, createSelector } from '@ngrx/store';
import { taskState, LIST_FEATURE_KEY } from '../taskList.state';


export const getTaskListState = createFeatureSelector<taskState>(LIST_FEATURE_KEY);

export const getListLoaded = createSelector(
    getTaskListState,
  (state: taskState) => state.loaded
);

export const getListError = createSelector(
    getTaskListState,
  (state: taskState) => state.error
);

export const getList  = createSelector(
    getTaskListState,
  (state: taskState) => state.taskList
);