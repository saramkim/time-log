import { configureStore, createSlice } from '@reduxjs/toolkit';

const alarm = createSlice({
  name: 'alarm',
  initialState: 15,
  reducers: {
    setAlarm(state, action) {
      return action.payload;
    },
  },
});
export const { setAlarm } = alarm.actions;

const process = createSlice({
  name: 'process',
  initialState: 'start',
  reducers: {
    pStop() {
      return 'stop';
    },
    pStart() {
      return 'start';
    },
    pLog() {
      return 'log';
    },
  },
});
export const { pStop, pStart, pLog } = process.actions;

export default configureStore({
  reducer: {
    alarm: alarm.reducer,
    process: process.reducer,
  },
});
