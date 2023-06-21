import React from 'react';

import { Routes,Route } from 'react-router-dom';
import { ContactPage } from 'Pages/ContactPage/ContactPage';
import { HomePage } from 'Pages/ContactPage/HomePage/HomePage';


export function App() {
  
  return (
    <Routes>
      <Route path='/' element={<div>Navigation</div>}/>
        <Route index element={<HomePage/>}/>
        <Route path='/signUp' element={<div>Sign Up</div>}/>
        <Route path='/login' element={<div>Log In</div>}/>
        <Route path='/personal Contacts' element={ContactPage}/>
    </Routes>
  );
}

