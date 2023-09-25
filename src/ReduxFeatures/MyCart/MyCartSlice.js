// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.push(newItem);
      }
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
