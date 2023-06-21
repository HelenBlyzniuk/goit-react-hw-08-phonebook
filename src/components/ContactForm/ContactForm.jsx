import React from 'react';
import { nanoid } from 'nanoid';

import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled.jsx';



import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/thunks.js';
import { getContacts } from 'components/redux/selectors.js';


export function ContactForm() {
  const dispatch=useDispatch();
  const contacts=useSelector(getContacts);


  const handleSubmit = e => {
    e.preventDefault();
    const form=e.target;
    const isContact = contacts.filter(
          contact =>
            contact.name.toLowerCase() === e.target.elements.name.value.toLowerCase()
        );
        
        if (isContact.length > 0) {
              alert('The contact has already existed');
              return;
            } else {
              dispatch(addContact({
                createdAt:Date(),
                name:e.target.elements.name.value,
                phone:e.target.elements.number.value,
                id:nanoid()
              })) 
               form.reset();
            }  
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          placeholder="...name"
          
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="...number"
          
        />
      </FormLabel>
      <FormButton type="submit" onSubmit={handleSubmit}>
        Add contact
      </FormButton>
    </FormContainer>
  );
}

