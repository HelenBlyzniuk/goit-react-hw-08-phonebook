

import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentUser, logOut, login, setToken, signUp,fetchContacts,addContact, deleteContact, patchContact } from "app/app";



export const SignUpThunk= createAsyncThunk("auth/signup", async (body,{rejectWithValue}) => { 
  try {
    const data=await signUp(body);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const LoginThunk= createAsyncThunk("auth/login", async (body,{rejectWithValue}) => { 
  try {
    const data=await login(body);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
 
});

export const LogOutThunk= createAsyncThunk("auth/logOut", async (_,thunkAPI) => { 
  const state=thunkAPI.getState();
  const currentToken=state.auth.token;
  
  if(currentToken===''){
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    const data=await logOut();
    return data;
  } catch (error) {
    setToken(`Bearer ${currentToken}`);
    return thunkAPI.rejectWithValue(error.message)
  }
 
});

export const GetCurrentUserThunk=createAsyncThunk('auth/currentUser',async(_,thunkAPI)=>{
  const state=thunkAPI.getState();
  const currentToken=state.auth.token;
  
  if(currentToken===''){
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setToken(`Bearer ${currentToken}`);
    const user=await currentUser();
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  }
  
)


export const fetchContactsThunk= createAsyncThunk("contactss/fetchAll", async () => {
    const contacts = await fetchContacts();
    return contacts;
  });


  export const addContactThunk = createAsyncThunk("contacts/addContact",async (body,thunkAPI)=>{
    
    try {
      
       const response=await addContact(body);
       return response.data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  })


  export const deleteContactThunk =createAsyncThunk("contacts/deleteContact",async(id,thunkAPI)=>{
    const state=thunkAPI.getState();
    const currentToken=state.auth.token;
    
    if(currentToken===''){
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(`Bearer ${currentToken}`);
        const response=await deleteContact(id)
        return response.data; 
         
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
      
      } )


      export const patchContactThunk=createAsyncThunk('contacts/patchContacts',async({idContact,name,number},thunkAPI)=>{
    try {
      const response=await patchContact({idContact,name,number})
      
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
      })
      


