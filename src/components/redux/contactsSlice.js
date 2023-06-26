import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { deleteContactThunk, fetchContactsThunk,addContactThunk, patchContactThunk } from './thunks';
import { handleContactAdd,handleContactFetch,handleDeleteContact,handlePending,handleRejected,handlePatchContact } from './handlers';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleContactFetch)
      .addCase(addContactThunk.fulfilled, handleContactAdd)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
      .addCase(patchContactThunk.fulfilled,handlePatchContact)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);

  },
});


export const contactReducer = contactSlice.reducer;
