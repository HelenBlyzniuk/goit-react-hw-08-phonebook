
import {  LoginThunk } from "components/redux/thunks";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { FormContainer,FormLabel, FormInput,FormButton } from "components/ContactForm/ContactForm.styled";


export const LoginPage=()=>{
   const[email, setEmail]=useState('');
   const [password,setPassword]=useState('');
   const dispatch=useDispatch();
   const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
   

   const handleChange=(e)=>{
   if(e.target.name==='email'){
    setEmail(e.target.value.trim())
   }
   if(e.target.name==="password"){
    setPassword(e.target.value.trim())
   }
   }


   const handleSubmit=(e)=>{
      e.preventDefault();
      if(email!==''&& password!==''){
        dispatch(LoginThunk({email,password}))
      }
  
   }
   

    return isLoggedIn?( <Navigate to="/" replace/>):(
        <FormContainer onSubmit={handleSubmit}>
            <FormLabel>
                <FormInput type="email"  name="email" value={email} onChange={handleChange} placeholder="...email"/>
            </FormLabel>
            <FormLabel>
                <FormInput type="password"  name="password" value={password} onChange={handleChange} placeholder="...password:not less 7 symblols"/>
            </FormLabel>
            <FormButton type="submit">Log in</FormButton>
        </FormContainer>
        
    )
}