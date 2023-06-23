import { useNavigate } from 'react-router-dom';
import tel from '../../../images/tel.jpg'
import { HomePageWrapper,TitleWrapper,HomePageTitle,HomePageSlogan,AuthButtons,LoginButton, SingUpButton } from './HomePage.styled';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <HomePageWrapper >
        <img src={tel} alt="telephone" className='homePageImg '/>
    <TitleWrapper>
        <HomePageTitle>Create your Phonebook:</HomePageTitle> 
        <HomePageSlogan>Orchestrate your contacts</HomePageSlogan> 
        <AuthButtons>
      <li className="authBtn">
        <SingUpButton onClick={()=>navigate('/signup')}>Sign Up</SingUpButton>
      </li>
      <li className="authBtn">
        <LoginButton
          type="button"
          onClick={() => navigate('/login')}
        >Log In</LoginButton>
      </li>
    </AuthButtons> 
        </TitleWrapper>    
    
    </HomePageWrapper >
  );
};
