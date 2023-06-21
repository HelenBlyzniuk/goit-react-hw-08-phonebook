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
        return {email,password};
      }

   }
  
   
    return(
        <form  className="login">
            <label  className="loginLabel">
                <input type="email" className="loginInput" name="email" value={email} onChange={handleChange} placeholder="...email"/>
            </label>
            <label  className="loginLabel">
                <input type="password" className="loginInput" name="password" value={password} onChange={handleChange} placeholder="...password"/>
            </label>
            <button className="submitLogin" type="submit" onSubmit={handleSubmit}>Log in</button>
        </form>
    )
}