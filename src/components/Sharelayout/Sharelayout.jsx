import { Outlet,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'; 


import { Suspense } from 'react';
import { getIsLoggedIn } from 'components/redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { AuthButtons,LoginButton,SingUpButton,AuthButtonsItem } from 'Pages/ContactPage/HomePage/HomePage.styled';
import { AppWrapper } from 'components/App.styled';
import { LogOutThunk } from 'components/redux/thunks';
import { Header,StyledLink  } from './Sharelayout.styled';


 const SharedLayout=()=>{
    const dispatch=useDispatch();
    const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
  

  const handleClick = () => {
    dispatch(LogOutThunk());
  };
    return(

        <AppWrapper>
        <Header>
        <nav>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='personal_contacts'>My contacts</StyledLink>
        </nav>
        {!isLoggedIn&&<AuthButtons>
            <AuthButtonsItem>
              <SingUpButton onClick={() => navigate('/signup')}>
                Sign Up
              </SingUpButton>
            </AuthButtonsItem>
            <AuthButtonsItem>
              <LoginButton type="button" onClick={() => navigate('/login')}>
                Log In
              </LoginButton>
            </AuthButtonsItem>
          </AuthButtons>} 
          {isLoggedIn&&<AuthButtons>
            
            <AuthButtonsItem>
            <LoginButton type="button" onClick={handleClick}>
        Log Out
      </LoginButton>
            </AuthButtonsItem>
            
          </AuthButtons>}

          </Header>
          <Suspense fallback={<Loader/>}>
            {}
          <Outlet/>
          </Suspense>
          </AppWrapper>
    )
}

export default SharedLayout;