// src/redux/Store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../feature/CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
