// // src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import themeReducer from './themeSlice';
// import authReducer from './authSlice';
// import cartReducer from './cartSlice';

// export const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//     auth: authReducer,
//     cart: cartReducer,
//   },
// });



// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import authReducer  from './authSlice';
import cartReducer  from './cartSlice';
import viewReducer  from './viewSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth:  authReducer,
    cart:  cartReducer,
    view:  viewReducer,
  },
});
