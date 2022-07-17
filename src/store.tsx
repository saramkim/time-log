import { configureStore, createSlice } from '@reduxjs/toolkit';

const statement = createSlice({
  name: 'state-name',
  initialState: 'value',
  reducers: {},
});

export default configureStore({
  reducer: {
    작명: statement.reducer,
  },
});
