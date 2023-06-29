
import {  LoginThunk } from "components/redux/thunks";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { FormContainer,FormLabel, FormInput,FormButton } from "components/ContactForm/ContactForm.styled";
import { getIsLoggedIn } from "components/redux/selectors";
import { toast } from "react-hot-toast";

 const LoginPage=()=>{
   const[email, setEmail]=useState('');
   const [password,setPassword]=useState('');
   const dispatch=useDispatch();
   const isLoggedIn=useSelector(getIsLoggedIn);
   

   const handleChange=(e)=>{
   if(e.target.name==='email'){
    setEmail(e.target.value.trim())
   }
   if(e.target.name==="password"){
    setPassword(e.target.value.trim())
   }
   }


   const handleSubmit=async(e)=>{
      e.preventDefault();
      if(email!==''&& password!==''){
        try {
           await dispatch(LoginThunk({email,password})).unwrap()
           toast.success('Logged in successfully')} 
         catch (error) {
           toast.error('Error login')  
        }
      
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
export default LoginPage;