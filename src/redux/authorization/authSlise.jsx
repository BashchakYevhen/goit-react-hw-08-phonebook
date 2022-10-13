import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { signUp, logIn, logOut, fetchCurrentUser } from './authOperation';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state, _) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state, _) {
      state.isRefreshing = false;
    },
  },
});

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

export const authReduser = authSlice.reducer;

export const authPersistReducer = persistReducer(
  authPersistConfig,
  authReduser
);
