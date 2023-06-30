import { createSlice } from '@reduxjs/toolkit';
import {
  SignUpThunk,
  LoginThunk,
  GetCurrentUserThunk,
  LogOutThunk,
} from './thunks';
import {
  handlePending,
  handleRejected,
  handleSignUpThunkFullfilled,
  handleLoginFulfilled,
  handleLogOutFulfilled,
  handleCurrentUserFulfilled,
  // handleGetCurrentUserPending
  
} from './handlers';

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  user: {},
  isLoggedIn: false,
  isRefreshing:false,
 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(SignUpThunk.fulfilled, handleSignUpThunkFullfilled)
      .addCase(LoginThunk.fulfilled, handleLoginFulfilled)
      .addCase(GetCurrentUserThunk.fulfilled, handleCurrentUserFulfilled)
      // .addCase(GetCurrentUserThunk.pending,handleGetCurrentUserPending)
      .addCase(LogOutThunk.fulfilled, handleLogOutFulfilled)
      .addMatcher(({ type }) => {
        type.endsWith('/pending');
      }, handlePending)
      .addMatcher(({ type }) => {
        type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
