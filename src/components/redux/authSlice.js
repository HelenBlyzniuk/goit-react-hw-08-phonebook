const { createSlice } = require('@reduxjs/toolkit');
const {
  SignUpThunk,
  LoginThunk,
  GetCurrentUserThunk,
  LogOutThunk,
} = require('./thunks');
const { handlePending, handleRejected } = require('./handlers');

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  user: {},
  isLoggedIn: false,
};

const handleSignUpThunkFullfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoading = false;
  state.isLoggedIn = true;
};

const handleLoginFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoading = false;
  state.isLoggedIn = true;
};
const handleLogOutFulfilled = (state, { payload }) => {
  state.token = '';
  state.isLoading = false;
  state.user = {};
  state.isLoggedIn = false;
};
const handleCurrentUserFulfilled = (state, { payload }) => {
  
  state.isLoading = false;
  state.currentUser = payload;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(SignUpThunk.fulfilled, handleSignUpThunkFullfilled)
      .addCase(LoginThunk.fulfilled, handleLoginFulfilled)
      .addCase(GetCurrentUserThunk.fulfilled, handleCurrentUserFulfilled)
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
