
import { configureStore } from '@reduxjs/toolkit';

import {  filterSlice } from './contacts/filter.slice';
import { contactsSlice } from './contacts/contacts.slice';


export const store = configureStore({
    devTools: true,
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    } ,


  
    })

   



