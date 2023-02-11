import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContactsAction ,deleteContactsAction } from "redux/operations";



export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  // reducers: {
  //   deleteContactsAction: (state, { payload }) => {
  //     state.contacts = state.contacts.filter(
  //       (contact) => contact.id !== payload
  //     );
  //   },
  //   addContactsAction: (state, { payload }) => {
  //     const newContact = {
  //       id: nanoid(),
  //       ...payload,
  //     };
  //     state.contacts.some(({ name }) => name === payload.name)
  //       ? alert(`${newContact.name} is already in contacts.`)
  //       : state.contacts.push(newContact);
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    
    }).addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;

    }).addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.payload;
     
    }).addCase(addContactsAction.pending, state => {
      state.isLoading = true;
      
    }).addCase(addContactsAction.fulfilled,(state , action)  => {
      state.isLoading = false;
      state.error = null;
      state.contacts = [...state.contacts, action.payload];
    }).addCase(addContactsAction.rejected, (state, action) => {
      state.error = action.payload;
    }).addCase(deleteContactsAction.pending, state  => {
      state.isLoading = true;
    }).addCase(deleteContactsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
    }).addCase(deleteContactsAction.rejected, (state, action) => {
      state.error = action.payload;
    })
  },
})

// export const { deleteContactsAction, addContactsAction } =
//   contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;