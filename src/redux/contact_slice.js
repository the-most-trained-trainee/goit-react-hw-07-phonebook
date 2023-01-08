import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

import { fetchContacts, addContact } from "./operations";

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-3', name: 'Masha Browko', number: '222-33-26' },
    ],
    isLoading: false,
    error: null
  },

  extraReducers: {

    // fetch contacts 

    [fetchContacts.pending](state) {
      state.isLoading = true;
    },

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },

    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // add contact 

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }

  }

});

export const { removeContact } = phoneBookSlice.actions;

export default phoneBookSlice.reducer;



// addContact(state, action) {
//   state.contacts.push({
//     id: nanoid(),
//     name: action.payload.name,
//     number: action.payload.number,
//   })
// },

// removeContact(state, action) {
//   const removeId = state.contacts.findIndex((contact) => contact.id === action.payload);
//   state.contacts.splice(removeId, 1);
// },