import { LogOutThunk } from 'components/redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { LoginButton,SingUpButton } from 'Pages/ContactPage/HomePage/HomePage.styled';
import { UserBarWrapper, UserBarSentence } from './UserBar.styled';
import { getUserEmail } from 'components/redux/selectors';
import { useNavigate } from 'react-router-dom';

export const UserBar = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  const navigate=useNavigate();
  const handleClick = () => {
    dispatch(LogOutThunk());
  };
  return (
    <UserBarWrapper>
      <UserBarSentence>hello! User {userEmail}</UserBarSentence>
      <SingUpButton onClick={() => navigate('/personal_contacts')}>
                My contacts
              </SingUpButton>
      <LoginButton type="button" onClick={handleClick}>
        Log Out
      </LoginButton>
      
      
    </UserBarWrapper>
  );
};

// export default UserBar;
