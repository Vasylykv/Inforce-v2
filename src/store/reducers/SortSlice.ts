import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SortState {
  activeFilter: string;
}

const initialState: SortState = {
  activeFilter: 'name',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    activeFilterChanged: (state, action: PayloadAction<string>) => {
      state.activeFilter = action.payload;
    },
  },
});

export default sortSlice.reducer;

export const { activeFilterChanged } = sortSlice.actions;
