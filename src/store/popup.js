import { createSlice } from '@reduxjs/toolkit';

// 1. Create initial state
const initProduct = { product: null };

// 2. Create slice
// popup reducer
const popupSlice = createSlice({
  name: 'popup',
  initialState: initProduct,
  reducers: {
    showPopup(state, action) {
      // console.log(action.payload);

      state.product = action.payload;
    },

    hidePopup(state) {
      state.product = null;
    },
  },
});

// 3. Export reducer and actions
const popupReducer = popupSlice.reducer;

export default popupReducer;

export const { showPopup, hidePopup } = popupSlice.actions;
