import React from 'react';

import { Routes,Route } from 'react-router-dom';
import { ContactPage } from 'Pages/ContactPage/ContactPage';


export function App() {
  
  return (
    <Routes>
      <Route path='/' element={<div>Navigation</div>}/>
        <Route index element={<div><button>Log In</button><button>Sign up</button></div>}/>
        <Route path='/signUp' element={<div>Sign Up</div>}/>
        <Route path='/signUp' element={<div>Log In</div>}/>
        <Route path='/personal Contacts' element={ContactPage}/>
    </Routes>
  );
}

