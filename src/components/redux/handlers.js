export function handlePending(state) {
    state.isLoading = true;
    state.error = null;
    state.isLoggedIn=false;
  }

 export function handleRejected(state, { payload,error }) {
    state.error = error?error.message:payload;
    state.isLoading = false;
    state.isLoggedIn=false;
    
    
  }
  export function handleContactFetch(state, { payload }){
    state.isLoading = false;
    state.items = payload;
    
  }
  export function handleContactAdd(state,{payload}){
    state.isLoading = false;
    state.items.push(payload);
  }
 export function handleDeleteContact(state,{payload}){
    state.isLoading = false;
    state.items=state.items.filter(contact => contact.id !== payload.id);
  }
  export function handlePatchContact(state,{payload}){
    state.isLoading=false; 
    state.items=state.items.map((contact) => (contact.id !== payload.id?contact:payload) )
  }

  // AuthReducer
  export const handleSignUpThunkFullfilled = (state, { payload }) => {
    state.token = payload.token;
    state.user = payload.user;
    state.isLoading = false;
    state.isLoggedIn = true;
  };
  export const handleSignUpThunkPending = (state, { payload }) => {
    state.isLoading = true;
    state.error = null;
    state.isLoggedIn=false;
  };
  export const handleSignUpThunkRejected = (state, { error,payload }) => {
    state.error = error?error.message:payload;
    state.isLoading = false;
    state.isLoggedIn=false;
  };
  export const handleLoginFulfilled = (state, { payload }) => {
    state.token = payload.token;
    state.user = payload.user;
    state.isLoading = false;
    state.isLoggedIn = true;
  };
  export const handleLoginPending = (state, { payload }) => {
    state.isLoading = true;
    state.error = null;
    state.isLoggedIn=false;
  };
  export const handleLoginRejected = (state, { error,payload }) => {
    state.error = error?error.message:payload;
    state.isLoading = false;
    state.isLoggedIn=false;
  };
  export const handleLogOutFulfilled = (state, { payload }) => {
    state.token = '';
    state.isLoading = false;
    state.user = {};
    state.isLoggedIn = false;
    
  };
  export const handleLogOutPending = (state, { payload }) => {
    state.isLoading = true;
    state.error = null;
    state.isLoggedIn=false;
    }
  export const handleLogOutRejected = (state, { error,payload }) => {
    state.error = error?error.message:payload;
    state.isLoading = false;
    state.isLoggedIn=false;
   
  };
  export const handleCurrentUserFulfilled = (state, { payload }) => {
  
    state.isLoading = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
    state.isRefreshing=false;
  
   
  };
  export const handleCurrentUserPending = (state, { payload }) => {
  
    state.isLoading = true;
    state.error = null;
    state.isLoggedIn=false;
    state.isRefreshing=true;
  
   
  };
  
  export const handleCurrentUserRejected = (state, {error, payload }) => {
  
    state.error = error?error.message:payload;
    state.isLoading = false;
    state.isLoggedIn=false;
    state.isRefreshing=false;
   
  };
  
  
//  export const handleGetCurrentUserPending=(state)=>{
//   state.isLoading = true;
//   state.error = null;
//   state.isLoggedIn=false;
//   state.isRefreshing=true;
//  }
  