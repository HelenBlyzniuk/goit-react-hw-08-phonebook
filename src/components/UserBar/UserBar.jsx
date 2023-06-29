
import {  useSelector } from 'react-redux';

import {  UserBarSentence } from './UserBar.styled';
import { getUserEmail } from 'components/redux/selectors';

export const UserBarGreeting = () => {
  
  const userEmail = useSelector(getUserEmail);
 
  return (
    
      <UserBarSentence>Welcome! User {userEmail}</UserBarSentence> 
    
  );
};


