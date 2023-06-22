const { createSlice } = require('@reduxjs/toolkit');
const { SignUpThunk, LoginThunk } = require('./thunks');
const { handlePending, handleRejected } = require('./handlers');

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  isLoggedIn:false,
  email:'',
};

const handleSignUpThunkFullfilled = (state, { payload }) => {
  
  state.email=payload.user.email;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn=true;
  
};

const handleLoginFulfilled = (state, { payload }) => {
  state.email=payload.user.email;
  state.token = payload.token;
  state.isLoading = false;
  state.isLoggedIn=true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(SignUpThunk.fulfilled, handleSignUpThunkFullfilled)
      .addCase(LoginThunk.fulfilled, handleLoginFulfilled)
      .addMatcher(({ type }) => {
        type.endsWith('/pending');
      }, handlePending)
      .addMatcher(({ type }) => {
        type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
