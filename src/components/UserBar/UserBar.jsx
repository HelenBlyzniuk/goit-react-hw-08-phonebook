
import { LogOutThunk } from 'components/redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { LoginButton } from 'Pages/ContactPage/HomePage/HomePage.styled'; 
import { UserBarWrapper,UserBarSentence } from './UserBar.styled';



 export const UserBar=()=>{
const dispatch=useDispatch();
const userEmail=useSelector(state=>state.auth.user.email)
    const handleClick=()=>{
        dispatch(LogOutThunk());
      }
    return(<UserBarWrapper><UserBarSentence>hello! User {userEmail}</UserBarSentence><LoginButton type="button" onClick={handleClick}>Log Out
    </LoginButton></UserBarWrapper>)
}

// export default UserBar;