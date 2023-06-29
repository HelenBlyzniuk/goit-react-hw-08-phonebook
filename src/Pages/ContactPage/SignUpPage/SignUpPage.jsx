
import { FormContainer,FormLabel,FormInput,FormButton } from 'components/ContactForm/ContactForm.styled';

import { SignUpThunk } from 'components/redux/thunks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from "react-hot-toast";

 const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch=useDispatch();
  
 

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (email !== '' && password !== '' && name !== '') {
      try {
        await  dispatch(SignUpThunk({ name, email, password })).unwrap()
        toast.success('Signed up successfully')} 
      catch (error) {
        toast.error('Error Sign Up')  
     }
          
    }

  };
 

  return (
    
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
        Sign up
      </FormButton>
    </FormContainer>
  );
};

export default SignUpPage;