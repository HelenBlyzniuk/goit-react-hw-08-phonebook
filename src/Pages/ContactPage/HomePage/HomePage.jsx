// import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

import tel from '../../../images/tel.jpg';
import {
  HomePageWrapper,
  TitleWrapper,
  HomePageTitle,
  HomePageSlogan,
  
} from './HomePage.styled';
// import { UserBar } from 'components/UserBar/UserBar';

import { useDispatch} from 'react-redux';
import { GetCurrentUserThunk } from 'components/redux/thunks';


 const HomePage = () => {
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector(getIsLoggedIn);
  // const user = useSelector(getUser);
  
  
  const dispatch=useDispatch();

    useEffect(()=>{
    dispatch(GetCurrentUserThunk());
  },[dispatch])
  
 
  return (
    <>
      {/* {isLoggedIn && user.email!=='' &&<UserBar/>} */}
      <HomePageWrapper>
      
        <img src={tel} alt="telephone" className="homePageImg " />
        <TitleWrapper>
          <HomePageTitle>Create your Phonebook:</HomePageTitle>
          <HomePageSlogan>Orchestrate your contacts</HomePageSlogan>
         {/* {!isLoggedIn&&<AuthButtons>
            <li className="authBtn">
              <SingUpButton onClick={() => navigate('/signup')}>
                Sign Up
              </SingUpButton>
            </li>
            <li className="authBtn">
              <LoginButton type="button" onClick={() => navigate('/login')}>
                Log In
              </LoginButton>
            </li>
          </AuthButtons>}  */}
          
        </TitleWrapper>
      </HomePageWrapper>
    </>
  );
};

export default HomePage ;