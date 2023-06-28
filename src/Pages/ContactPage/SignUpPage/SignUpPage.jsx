
import { FormContainer,FormLabel,FormInput,FormButton } from 'components/ContactForm/ContactForm.styled';
import { getIsLoggedIn } from 'components/redux/selectors';
import { SignUpThunk } from 'components/redux/thunks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Navigate } from 'react-router-dom';

 const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch=useDispatch();
  const isLoggedIn=useSelector(getIsLoggedIn);
 

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
    
    if (email !== '' && password !== '' && name !== '') {
        dispatch(SignUpThunk({ name, email, password }))   
    }

  };
 

  return isLoggedIn?( <Navigate to="/" replace/>): (
    
    <FormContainer onSubmit={handleSubmit}>
      <FormLabel> Name
        <FormInput
          type="name"
          className="signupInput"
          name="name"
          onChange={handleChange}
          placeholder="...name"
        />
      </FormLabel>
      <FormLabel> Email
        <FormInput
          type="email"
          className="signupInput"
          name="email"
          onChange={handleChange}
          placeholder="...email"
        />
      </FormLabel>
      <FormLabel> Password
        <FormInput
          type="password"
          className="signupInput"
          name="password"
          onChange={handleChange}
          placeholder="...password:not less 7 symblols"
        />
      </FormLabel>
      <FormButton type="submit">
        Sign in
      </FormButton>
    </FormContainer>
  );
};

export default SignUpPage;