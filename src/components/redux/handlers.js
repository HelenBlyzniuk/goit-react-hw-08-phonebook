export function handlePending(state) {
    state.isLoading = true;
    state.error = null;
  }

 export function handleRejected(state, { payload,error }) {
    state.error = error?error.message:payload;
    state.isLoading = false;
    
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