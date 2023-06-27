
import React, { useState } from 'react';


import {
  FormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { patchContactThunk } from 'components/redux/thunks';

export const CorrectContactForm=({contact})=>{
    const id=contact.find(item=>{return item.id})
    console.log(id.id,id.name,id.number)

    const [idContact]=useState(id.id);
    
    const [name,setName]=useState(id.name);
    const [number,setNumber]=useState(id.number);
    const dispatch=useDispatch()

    const onChange=(e)=>{
        if(e.target.name==='name'){
            setName(e.target.value)
        }
        if(e.target.name==='number'){
            setNumber(e.target.value)
        }
       
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       if(name.trim()!==''&&number.trim()!==''){
        dispatch(patchContactThunk({idContact,name,number}))
       }
       
    }
    

    return(  <FormContainer onSubmit={handleSubmit}>
        
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            placeholder={name}
           
            onChange={onChange} required
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
            
            
          />
        </FormLabel>
        <FormButton type="submit" >
          Correct contact
        </FormButton>
      </FormContainer>
  )
    }