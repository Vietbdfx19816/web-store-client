import { createSlice } from '@reduxjs/toolkit';

import {
  cleanStorage,
  getDuration,
  getUser,
  setExpires,
  setUser,
} from './localStorage';

// 1. Create initial state
const initAuth = { user: getUser(), duration: getDuration() };
// console.log(initAuth);

// 2. Create slice
// auth reducer
const authSlice = createSlice({
  name: 'authentication',
  initialState: initAuth,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.expires = action.payload.expires;

      setUser(action.payload.user);
      setExpires(action.payload.expires);
    },

    logout() {
      const emptyState = { user: null, duration: null };

      cleanStorage();

      return emptyState;
    },
  },
});

// 3. Export reducer and actions
const authReducer = authSlice.reducer;

export default authReducer;

export const authActions = authSlice.actions;
