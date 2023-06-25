import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { deleteContact, fetchContactsThunk,addContact } from './thunks';
import { handleContactAdd,handleContactFetch,handleDeleteContact,handlePending,handleRejected } from './handlers';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleContactFetch)
      .addCase(addContact.fulfilled, handleContactAdd)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);

  },
});


export const contactReducer = contactSlice.reducer;
