import { configureStore, createSlice } from '@reduxjs/toolkit';

const alarm = createSlice({
  name: 'alarm',
  initialState: 5,
  reducers: {
    setAlarm(state, action) {
      return action.payload;
    },
  },
});
export const { setAlarm } = alarm.actions;

const process = createSlice({
  name: 'process',
  initialState: 'stop',
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

const focus = createSlice({
  name: 'focus',
  initialState: '코딩',
  reducers: {
    setFocus(state, action) {
      return action.payload;
    },
  },
});
export const { setFocus } = focus.actions;

const store = configureStore({
  reducer: {
    alarm: alarm.reducer,
    process: process.reducer,
    focus: focus.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
