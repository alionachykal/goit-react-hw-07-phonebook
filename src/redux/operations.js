import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://63e4e15ac04baebbcdae2fb4.mockapi.io/api";


export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
        
  
});
 

export const addContactsAction = createAsyncThunk(
  "contacts/addContactsAction",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts",  newContact );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsAction = createAsyncThunk(
  'contacts/deleteContactsAction',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);