import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/ContactForm/ContactForm.styled';
import { CorrectFormButtons } from './CorrectContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { patchContactThunk } from 'components/redux/thunks';
import { getContacts } from 'components/redux/selectors';
import { useNavigate } from 'react-router-dom';

export const CorrectContactForm = ({ contact, onModalClick }) => {
  const navigate=useNavigate();
  const id = contact.find(item => {
    return item.id;
  });
  

  const [idContact] = useState(id.id);

  const [name, setName] = useState(id.name);
  const [number, setNumber] = useState(id.number);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const handleClick=e=>{
    navigate('/personal_contacts');
    onModalClick();
  }
  const handleSubmit = e => {
    e.preventDefault();
    const isContact = contacts.filter(
      contact =>
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
    );

    if (isContact.length > 0) {
      alert('The contact has already existed');
      return;
    }
    if (name.trim() !== '' && number.trim() !== '') {
      dispatch(patchContactThunk({ idContact, name, number }));
    }

    onModalClick();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          placeholder={name}
          onChange={onChange}
          required
          value={name}
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
          onChange={onChange}
          placeholder={number}
          value={number}
        />
      </FormLabel>
      <CorrectFormButtons>
      <FormButton type="submit">Correct contact</FormButton>
      <FormButton type="button" onClick={handleClick}>Back</FormButton>
      </CorrectFormButtons>
    </FormContainer>
  );
};


CorrectContactForm.propTypes={
  contact:PropTypes.array,
  onModalClick:PropTypes.func,
}