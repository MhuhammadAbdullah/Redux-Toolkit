// // src/redux/authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: { user: null },
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;






// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// load initial user from localStorage (if any)
const savedUser = localStorage.getItem('user');
const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      // save to localStorage
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      // remove from localStorage
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
