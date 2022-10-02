import { createSlice } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const nanoid = customAlphabet('1234567890');
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push({
        id: nanoid(3),
        name: payload.name,
        number: payload.number,
      });
    },
    delContact: (state, { payload }) => {
      return {
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  // blacklist: ['filter'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, delContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.contacts;
