import { createSlice } from '@reduxjs/toolkit';
import {
  SignUpThunk,
  LoginThunk,
  GetCurrentUserThunk,
  LogOutThunk,
} from './thunks';
import {
  handleSignUpThunkFullfilled,
  handleLoginFulfilled,
  handleLogOutFulfilled,
  handleCurrentUserFulfilled,
  handleCurrentUserPending,
  handleSignUpThunkPending,
  handleSignUpThunkRejected,
  handleLogOutRejected,
  handleLoginRejected,
  handleLogOutPending,
  handleCurrentUserRejected,
} from './handlers';

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  user: {},
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(SignUpThunk.fulfilled, handleSignUpThunkFullfilled)
      .addCase(SignUpThunk.pending, handleSignUpThunkPending)
      .addCase(SignUpThunk.rejected, handleSignUpThunkRejected)
      .addCase(LoginThunk.fulfilled, handleLoginFulfilled)
      .addCase(LoginThunk.pending, handleLogOutRejected)
      .addCase(LoginThunk.rejected, handleLoginRejected)
      .addCase(GetCurrentUserThunk.fulfilled, handleCurrentUserFulfilled)
      .addCase(GetCurrentUserThunk.pending, handleCurrentUserPending)
      .addCase(GetCurrentUserThunk.rejected,handleCurrentUserRejected)
      .addCase(LogOutThunk.fulfilled, handleLogOutFulfilled)
      .addCase(LogOutThunk.pending, handleLogOutPending)
      .addCase(LogOutThunk.rejected, handleLogOutRejected)
  },
});

export const authReducer = authSlice.reducer;
