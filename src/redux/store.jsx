import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactSlise';
import { filterReducer } from './filterSlise';
import { authReduser } from './authorization/authSlise';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReduser,
  },
});
