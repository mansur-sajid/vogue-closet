// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../ReduxFeatures/MyCart/MyCartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
