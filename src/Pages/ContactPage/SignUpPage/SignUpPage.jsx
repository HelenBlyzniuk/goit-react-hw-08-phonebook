
import { SignUpThunk } from 'components/redux/thunks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch=useDispatch();
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  // const navigate=useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'name') {
      setName(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name, email, password });
    if (email !== '' && password !== '' && name !== '') {
        dispatch(SignUpThunk({ name, email, password }))
        
        // if(isLoggedIn){
        //     navigate ('/personal_contacts')
        // }
    }
  };
  console.log(isLoggedIn)

  return (
    
    <form className="signUp" onSubmit={handleSubmit}>
      <label className="signupLabel">
        <input
          type="name"
          className="signupInput"
          name="name"
          onChange={handleChange}
          placeholder="...name"
        />
      </label>
      <label className="signupLabel">
        <input
          type="email"
          className="signupInput"
          name="email"
          onChange={handleChange}
          placeholder="...email"
        />
      </label>
      <label className="signupLabel">
        <input
          type="password"
          className="signupInput"
          name="password"
          onChange={handleChange}
          placeholder="...password:not less 7 symblols"
        />
      </label>
      <button className="submitSignup" type="submit">
        Sign in
      </button>
    </form>
  );
};
