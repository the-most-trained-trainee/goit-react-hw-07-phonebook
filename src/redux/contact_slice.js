import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-3', name: 'Masha Browko', number: '222-33-26' },
    ],
  },

  reducers: {

    addContact(state, action) {
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      })
    },

    removeContact(state, action) {
      const removeId = state.contacts.findIndex((contact) => contact.id === action.payload);
      state.contacts.splice(removeId, 1);
    },

  }
});

export const { addContact, removeContact } = phoneBookSlice.actions;

export default phoneBookSlice.reducer;