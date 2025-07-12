import { createSlice } from '@reduxjs/toolkit';
import { getCartList, setCartList } from './localStorage';

const initCart = getCartList();

const cartSlice = createSlice({
  name: 'cart',
  initialState: initCart,
  reducers: {
    add(state, action) {
      const index = state.products.findIndex(
        item => item._id === action.payload.id
      );
      if (index === -1) {
        // add item if it wasn't in list
        state.products.push(action.payload);
      } else {
        const product = state.products[index];
        // update amount if item existed
        product.amount = product.amount + action.payload.amount;
      }

      setCartList({ ...state });
      // this reducer use Immer to mutate state and should not return new state object
    },

    update(state, action) {
      // update all cart
      // replace state with data from server or reset it to empty
      if (!action.payload) {
        state.products = [];
        state.coupon = 0;
      } else {
        const products = action.payload.products;
        const coupon = action.payload.coupon;

        state.products = products;
        state.coupon = coupon;
      }

      setCartList({ ...state });
    },

    remove(state, action) {
      // remove item from list
      // payload store product _id
      const products = state.products.filter(
        item => item._id !== action.payload
      );

      state.products = products;

      // update localStorage
      setCartList({ ...state });
    },
  },
});

const cartReducer = cartSlice.reducer;

export default cartReducer;

export const cartActions = cartSlice.actions;
