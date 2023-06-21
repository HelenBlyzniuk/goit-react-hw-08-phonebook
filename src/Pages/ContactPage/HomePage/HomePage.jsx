import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <ul className="authButtons">
      <li className="authBtn">
        <button className="signup" onClick={navigate('/signUp')}>Sign Up</button>
      </li>
      <li className="authBtn">
        <button
          className="login"
          type="button"
          onClick={() => navigate('/login')}
        >Log In</button>
      </li>
    </ul>
  );
};
