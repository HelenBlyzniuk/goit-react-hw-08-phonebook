
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentUser, logOut, login, setToken, signUp } from "app/app";



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

export const LogOutThunk= createAsyncThunk("auth/logOut", async (_,{rejectWithValue}) => { 
  try {
    const data=await logOut();
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
 
});

export const GetCurrentUserThunk=createAsyncThunk('auth/currentUser',async(_,thunkAPI)=>{
  const state=thunkAPI.getState();
  const currentToken=state.auth.token;
  if(currentToken===''){
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setToken(currentToken);
    const user=await currentUser();
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  }
  
)


export const fetchContacts= createAsyncThunk("contactss/fetchAll", async () => {
    const response = await axios.get("/contacts");
    return response.data;
  });


  export const addContact = createAsyncThunk("contacts/addContact",async ({createdAt,name,phone,id},thunkAPI)=>{
    try {
       const response=await axios.post("/contacts",{createdAt,name,phone,id});
     
       return response.data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  })

  export const deleteContact =createAsyncThunk("contacts/deleteContact",async(id,thunkAPI)=>{
    try {
        const response=await axios.delete(`/contacts/${id}`)
        return response.data; 
         
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
      
      } )

      
//       axios.defaults.baseURL = "https://648c54b28620b8bae7ecb565.mockapi.io/";

// export const fetchContacts= createAsyncThunk("contactss/fetchAll", async () => {
//     const response = await axios.get("/contacts");
//     return response.data;
//   });


//   export const addContact = createAsyncThunk("contacts/addContact",async ({createdAt,name,phone,id},thunkAPI)=>{
//     try {
//        const response=await axios.post("/contacts",{createdAt,name,phone,id});
     
//        return response.data; 
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
//   })

//   export const deleteContact =createAsyncThunk("contacts/deleteContact",async(id,thunkAPI)=>{
//     try {
//         const response=await axios.delete(`/contacts/${id}`)
//         return response.data; 
         
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
      
//       } )
  

