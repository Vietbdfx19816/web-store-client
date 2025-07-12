import { configureStore } from '@reduxjs/toolkit';

// Import reducers
import authReducer from './auth';
import popupReducer from './popup';
import cartReducer from './cart';

// Config store
const store = configureStore({
  reducer: { popup: popupReducer, auth: authReducer, cart: cartReducer },
});

// Export store
export default store;
