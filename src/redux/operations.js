import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'https://63badf5e56043ab3c7a7124b.mockapi.io';

const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(baseURL + `/contacts`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {

    const toAdd = { 'name': contact.name, 'phone': contact.number }

    // { "name": contact.name, "phone": contact.number }
    try {
      const addingContact = await fetch(baseURL + `/contacts`, {
        method: 'POST',
        body: JSON.stringify(toAdd)
      });
      const addingContactJSON = addingContact.json();
      return addingContactJSON;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }


)




export { fetchContacts, addContact };