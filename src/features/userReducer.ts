import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../redux-store/store';

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

const userReducer = createSlice({
  name: 'userReducer',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    userInit: state => {
      state.isLoggedIn = true;
    },
  },
});

export const {userInit} = userReducer.actions;

export default userReducer.reducer;
