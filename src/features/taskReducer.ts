import {createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import {Task} from '../interfaces/TasksReducer';
import {RootState} from '../redux-store/store';

const initialState: {
  taskList: Task[];
} = {
  taskList: [],
};

export const selectTasklist = (state: RootState) => state.tasks.taskList;

const taskReducer = createSlice({
  name: 'taskReducer',
  initialState: initialState,
  reducers: {
    addTask: (state, actions) => {
      state.taskList = [
        ...state.taskList,
        {
          isComplete: false,
          title: actions.payload,
          id: JSON.stringify(uuid.v4()),
        },
      ];
    },
    editTask: (state, actions) => {
      state.taskList = actions.payload;
    },
    removeTask: (state, actions) => {
      state.taskList = actions.payload;
    },
  },
});

export const {addTask, editTask, removeTask} = taskReducer.actions;

export default taskReducer.reducer;
