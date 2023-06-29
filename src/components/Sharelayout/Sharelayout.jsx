import {Link, Outlet,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'; 


import { Suspense } from 'react';
import { getIsLoggedIn } from 'components/redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { AuthButtons,LoginButton,SingUpButton } from 'Pages/ContactPage/HomePage/HomePage.styled';
import { AppWrapper } from 'components/App.styled';

 const SharedLayout=()=>{
    const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);
    return(

        <AppWrapper>
        <header>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='personal_contacts'>My contacts</Link>
        </nav>
        {!isLoggedIn&&<AuthButtons>
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
          </AuthButtons>} 
          </header>
          <Suspense fallback={<Loader/>}>
          <Outlet/>
          </Suspense>
          </AppWrapper>
    )
}

export default SharedLayout;