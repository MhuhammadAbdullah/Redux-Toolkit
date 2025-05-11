// // src/redux/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: { cartItems: [] },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartItems.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;








// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []  // each item: { id, name, price, qty }
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      const existing = state.cartItems.find(i => i.id === id);
      if (existing) {
        existing.qty -= 1;
        if (existing.qty <= 0) {
          state.cartItems = state.cartItems.filter(i => i.id !== id);
        }
      }
    },
    removeFromCart: (state, action) => {
      // removes the item entirely regardless of qty
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    }
  },
});

export const { addToCart, decreaseQty, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
