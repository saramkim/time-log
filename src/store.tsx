import { configureStore, createSlice } from '@reduxjs/toolkit';

const time = createSlice({
  name: 'time',
  initialState: 0,
  reducers: {
    setTime(state, action) {
      return action.payload;
    },
    countDown(state) {
      return state - 1;
    },
    countUp(state) {
      return state + 1;
    },
  },
});
export const { setTime, countDown, countUp } = time.actions;

const process = createSlice({
  name: 'process',
  initialState: 'stop',
  reducers: {
    pStop(state) {
      return 'stop';
    },
    pStart(state) {
      return 'start';
    },
    pLog(state) {
      return 'log';
    },
  },
});
export const { pStop, pStart, pLog } = process.actions;

export default configureStore({
  reducer: {
    time: time.reducer,
    process: process.reducer,
  },
});
