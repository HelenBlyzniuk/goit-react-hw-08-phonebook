
import { AppWrapper } from './App.styled';

import { Routes,Route } from 'react-router-dom';
import { ContactPage } from 'Pages/ContactPage/ContactPage';
import { HomePage } from 'Pages/ContactPage/HomePage/HomePage';
import { LoginPage } from 'Pages/ContactPage/LoginPage/LoginPage';
import { SignUpPage } from 'Pages/ContactPage/SignUpPage/SignUpPage';
import { NotFoundPage } from 'Pages/ContactPage/NotFoundPage/NotFoundPage';
import PrivateRoute from 'Routes/PrivateRoute';
import PublicRoute from 'Routes/PublicRoute';


export function App() {
  
  
  return (
    <AppWrapper>
    <Routes>
      <Route path='/' element={<div>Navigation</div>}/>
        <Route index element={<HomePage/>}/>
        <Route path='/signup' element={<PublicRoute><SignUpPage/></PublicRoute>}/>
        <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
        <Route path='/personal_contacts' element={<PrivateRoute><ContactPage/></PrivateRoute>}/>
        <Route path='*' element={<NotFoundPage/>}/>

    </Routes>
    </AppWrapper>
  );
}

