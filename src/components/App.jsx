import React from 'react';

import { Routes,Route } from 'react-router-dom';
import { ContactPage } from 'Pages/ContactPage/ContactPage';
import { HomePage } from 'Pages/ContactPage/HomePage/HomePage';
import { LoginPage } from 'Pages/ContactPage/LoginPage/LoginPage';
import { SignUpPage } from 'Pages/ContactPage/SignUpPage/SignUpPage';
import { NotFoundPage } from 'Pages/ContactPage/NotFoundPage/NotFoundPage';

export function App() {
  
  return (
    <div className="app-wrapper">
    <Routes>
      <Route path='/' element={<div>Navigation</div>}/>
        <Route index element={<HomePage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/personal_contacts' element={<ContactPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>

    </Routes>
    </div>
  );
}

