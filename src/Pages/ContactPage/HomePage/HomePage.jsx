import { useNavigate } from 'react-router-dom';
import tel from '../../../images/tel.jpg';
import {
  HomePageWrapper,
  TitleWrapper,
  HomePageTitle,
  HomePageSlogan,
  AuthButtons,
  LoginButton,
  SingUpButton,
} from './HomePage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { LogOutThunk } from 'components/redux/thunks';

export const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);
  const dispatch=useDispatch();

  const handleClick=()=>{
    dispatch(LogOutThunk());
  }

  return (
    <>
      {isLoggedIn && <div>hello! User {user.email}</div>}
      <HomePageWrapper>
        <img src={tel} alt="telephone" className="homePageImg " />
        <TitleWrapper>
          <HomePageTitle>Create your Phonebook:</HomePageTitle>
          <HomePageSlogan>Orchestrate your contacts</HomePageSlogan>
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
          {isLoggedIn&&<AuthButtons>
            <li className="authBtn">
              <SingUpButton onClick={() => navigate('/personal_contacts')}>
                My contacts
              </SingUpButton>
            </li>
            <li className="authBtn">
              <LoginButton type="button" onClick={handleClick}>
                Log Out
              </LoginButton>
            </li>
          </AuthButtons>} 
        </TitleWrapper>
      </HomePageWrapper>
    </>
  );
};
