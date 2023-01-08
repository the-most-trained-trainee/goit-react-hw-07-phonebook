import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'https://63badf5e56043ab3c7a7124b.mockapi.io';

const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await fetch(baseURL + `/contacts`);
  
})