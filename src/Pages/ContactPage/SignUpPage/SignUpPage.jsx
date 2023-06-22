
import { signUp } from "app/app";
import { useState } from "react";



export const SignUpPage=()=>{
   const[email, setEmail]=useState('');
   const [password,setPassword]=useState('');
   const[name,setName]=useState('');
   
   

   const handleChange=({target:{name,value}})=>{
   if(name==='email'){
    setEmail(value)
   }
   if(name==="password"){
    setPassword(value)
   }
   if(name==="name"){
    setName(value)
   }
   }


   const handleSubmit=(e)=>{
      e.preventDefault();
      console.log({name,email,password})
      if(email!==''&& password!==''&&name!==''){
      signUp({name,email,password}) ;
      }

   }
  
   
    return(
        <form  className="signUp"  onSubmit={handleSubmit}>
             <label  className="signupLabel">
                <input type="name" className="signupInput" name="name" value={name} onChange={handleChange} placeholder="...name"/>
            </label>
            <label  className="signupLabel">
                <input type="email" className="signupInput" name="email" value={email} onChange={handleChange} placeholder="...email"/>
            </label>
            <label  className="signupLabel">
                <input type="password" className="signupInput" name="password" value={password} onChange={handleChange} placeholder="...password"/>
            </label>
            <button className="submitSignup" type="submit">Sign in</button>
        </form>
    )
}