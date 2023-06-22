import { login } from "app/app";
import { useState } from "react";


export const LoginPage=()=>{
   const[email, setEmail]=useState('');
   const [password,setPassword]=useState('');
   

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
        login({email,password})
      
      }

   }
  
   
    return(
        <form  className="login" onSubmit={handleSubmit}>
            <label  className="loginLabel">
                <input type="email" className="loginInput" name="email" value={email} onChange={handleChange} placeholder="...email"/>
            </label>
            <label  className="loginLabel">
                <input type="password" className="loginInput" name="password" value={password} onChange={handleChange} placeholder="...password:not less 7 symblols"/>
            </label>
            <button className="submitLogin" type="submit">Log in</button>
        </form>
    )
}