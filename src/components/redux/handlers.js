export function handlePending(state) {
    state.isLoading = true;
    state.error = null;
  }

 export function handleRejected(state, { payload }) {
    state.error = payload;
    state.isLoading = false;
    state.isLoggedIn=false;
  }
  export function handleContactFetch(state, { payload }){
    state.isLoading = false;
    state.isLoggedIn=false;
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