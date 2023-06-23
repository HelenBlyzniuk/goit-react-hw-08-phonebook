const { createSlice } = require('@reduxjs/toolkit');
const { SignUpThunk, LoginThunk, GetCurrentUserThunk } = require('./thunks');
const { handlePending, handleRejected } = require('./handlers');

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  currentUser: null,
};

const handleSignUpThunkFullfilled = (state, { payload }) => {
  state.token = payload.token;
  state.isLoading = false;
};

const handleLoginFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.isLoading = false;
};
const handleCurrentUserFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.isLoading = false;
  state.currentUser = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(SignUpThunk.fulfilled, handleSignUpThunkFullfilled)
      .addCase(LoginThunk.fulfilled, handleLoginFulfilled)
      .addCase(GetCurrentUserThunk, handleCurrentUserFulfilled)
      .addMatcher(({ type }) => {
        type.endsWith('/pending');
      }, handlePending)
      .addMatcher(({ type }) => {
        type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
