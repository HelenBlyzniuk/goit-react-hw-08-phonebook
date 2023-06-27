export const getContacts=(state)=>state.contacts.items;

export const getIsLoading =state=>state.contacts.isLoading;

export const getError =state=>state.contacts.error;

export const getFilter =state=>state.filters;
    
export const getUserEmail=state=>state.auth.use.email