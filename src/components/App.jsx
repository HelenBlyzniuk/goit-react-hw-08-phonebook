
import { lazy, } from "react";

import { Routes,Route } from 'react-router-dom';
// import RememberedRoute from 'Routes/RememberRoute'
import PrivateRoute from 'Routes/PrivateRoute';
import PublicRoute from 'Routes/PublicRoute';
import  SharedLayout  from "./Sharelayout/Sharelayout";
import { Toaster } from "react-hot-toast";

import React,{useEffect} from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { GetCurrentUserThunk } from 'components/redux/thunks';

// import { getIsLoggedIn,getUserEmail } from 'components/redux/selectors';
// import { Loader } from "./Loader/Loader";
const ContactPage =lazy(()=>import('Pages/ContactPage/ContactPage') );
const HomePage =lazy(()=>import('Pages/ContactPage/HomePage/HomePage')) ;
const LoginPage =lazy(()=>import('Pages/ContactPage/LoginPage/LoginPage')) ;
const SignUpPage =lazy(()=>import('Pages/ContactPage/SignUpPage/SignUpPage')) ;
const NotFoundPage =lazy(()=>import('Pages/ContactPage/NotFoundPage/NotFoundPage')) ;



export const App=() =>{
  const isRefreshing=useSelector(state=>state.auth.isRefreshing);
  const token=useSelector(state=>state.auth.token)
  console.log(token)
  console.log(isRefreshing)
 
  
  
  const dispatch=useDispatch();

    useEffect(()=>{
    dispatch(GetCurrentUserThunk());
  },[dispatch])

  return !isRefreshing&&(
    <>
    
    <Toaster/>
 <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='signup' element={<PublicRoute><SignUpPage/></PublicRoute>}/>
        <Route path='login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
        <Route path='personal_contacts' element={<PrivateRoute><ContactPage/></PrivateRoute>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
    
    
    </> 
  );
}

