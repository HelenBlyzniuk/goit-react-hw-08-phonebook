import { useState } from "react";


export const SignUpPage=()=>{
   const[email, setEmail]=useState('');
   const [password,setPassword]=useState('');
   const[name,setName]=useState('');
   

   const handleChange=(e)=>{
   if(e.target.name==='email'){
    setEmail(e.target.value.trim())
   }
   if(e.target.name==="password"){
    setPassword(e.target.value.trim())
   }
   if(e.target.name==="name"){
    setName(e.target.value.trim())
   }
   }


   const handleSubmit=(e)=>{
      e.preventDefault();
      if(email!==''&& password!==''){
        return {name,email,password};
      }

   }
  
   
    return(
        <form  className="signUp">
             <label  className="signupLabel">
                <input type="name" className="signupInput" name="name" value={name} onChange={handleChange} placeholder="...name"/>
            </label>
            <label  className="signupLabel">
                <input type="email" className="signupInput" name="email" value={email} onChange={handleChange} placeholder="...email"/>
            </label>
            <label  className="signupLabel">
                <input type="password" className="signupInput" name="password" value={password} onChange={handleChange} placeholder="...password"/>
            </label>
            <button className="submitSignup" type="submit" onSubmit={handleSubmit}>Sign in</button>
        </form>
    )
}