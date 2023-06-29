// import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

import tel from '../../../images/tel.jpg';
import {
  HomePageWrapper,
  TitleWrapper,
  HomePageTitle,
  HomePageSlogan,
  
} from './HomePage.styled';


import { useDispatch} from 'react-redux';
import { GetCurrentUserThunk } from 'components/redux/thunks';
import { getIsLoggedIn,getUserEmail } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import { UserBarGreeting } from 'components/UserBar/UserBar';


 const HomePage = () => {
  
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userEmail = useSelector(getUserEmail);
 
  
  
  const dispatch=useDispatch();

    useEffect(()=>{
    dispatch(GetCurrentUserThunk());
  },[dispatch])
  
 
  return (
    <>
     
      <HomePageWrapper>
       
        <img src={tel} alt="telephone" className="homePageImg " />
        <TitleWrapper>
        {isLoggedIn && userEmail!=='' &&<UserBarGreeting/>}
          <HomePageTitle>Create your Phonebook:</HomePageTitle>
          <HomePageSlogan>Orchestrate your contacts</HomePageSlogan>
        
          
        </TitleWrapper>
      </HomePageWrapper>
    </>
  );
};

export default HomePage ;