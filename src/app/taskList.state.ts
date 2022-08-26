export const LIST_FEATURE_KEY = 'taskList';

export interface taskState {
  taskList: any;
  task: {
    id?: number;
    title?: string;
    body?: string;
    lane?: number;
  };
  loaded: boolean;
  error?: string | null;
}

export const initialListState: taskState = {
  taskList: [],
  task: {
    id:0,
    title:'',
    body:'',
    lane:0
  },
  loaded: false,
  error: null,
};

export interface Task {
  id?: number;
  title?: string;
  body?: string;
  lane?: number;
}