import { useNavigate } from 'react-router-dom';
import tel from '../../../images/tel.jpg'

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
        <img src={tel} alt="telephone" className='homePageImg '/>
        <h1 className="homePageTitle">Create your Phonebook</h1> 
        <h2 className="homePageSlogan">Orchestrate your contacts</h2>      
    <ul className="authButtons">
      <li className="authBtn">
        <button className="signup" onClick={()=>navigate('/signup')}>Sign Up</button>
      </li>
      <li className="authBtn">
        <button
          className="login"
          type="button"
          onClick={() => navigate('/login')}
        >Log In</button>
      </li>
    </ul>
    </div>
  );
};
