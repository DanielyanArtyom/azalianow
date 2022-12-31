import {combineReducers} from '@reduxjs/toolkit';
import taskReducer from '../features/taskReducer';
import userReducer from '../features/userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer,
});
