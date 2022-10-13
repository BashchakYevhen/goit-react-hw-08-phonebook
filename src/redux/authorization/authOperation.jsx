import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'phonebook/signup',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', data);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'phonebook/login',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', data);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'PhoneBook/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('users/logout');
      clearAuthHeader();
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// email(pin):"monika@mail.com"
// name(pin):"Monika"
// password(pin):"123456789"
