
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentUser, login, signUp } from "app/app";


axios.defaults.baseURL = "https:/connections-api.herokuapp.com/";
export const GetCurrentUserThunk=createAsyncThunk('auth/currentUser',()=>{
  currentUser()
})

export const SignUpThunk= createAsyncThunk("auth/signup", async (body,{rejectWithValue,dispatch}) => { 
  try {
    const data=await signUp(body);
    dispatch(GetCurrentUserThunk())
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const LoginThunk= createAsyncThunk("auth/login", async (body,{rejectWithValue,dispatch}) => { 
  try {
    const data=await login(body);
    dispatch(GetCurrentUserThunk())
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
 
});

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
  

