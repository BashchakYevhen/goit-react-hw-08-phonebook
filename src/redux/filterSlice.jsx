import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { filterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
