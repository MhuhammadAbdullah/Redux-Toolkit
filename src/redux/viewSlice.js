// src/redux/viewSlice.js
import { createSlice } from '@reduxjs/toolkit';

const viewSlice = createSlice({
  name: 'view',
  initialState: { current: 'theme' },
  reducers: {
    setView: (state, action) => {
      state.current = action.payload; // 'theme' | 'auth' | 'cart'
    },
  },
});

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;
