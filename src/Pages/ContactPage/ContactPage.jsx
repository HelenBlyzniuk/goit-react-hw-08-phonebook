import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader'; 
import { Filter } from 'components/Filter/Filter';
import { Error } from 'components/Error/Error';
import { fetchContactsThunk } from 'components/redux/thunks'; 
import { getContacts, getError, getIsLoading, getUserEmail } from 'components/redux/selectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Title,TitleSpan } from './ContactPage.styled';

 const ContactPage=()=>{
    const dispatch = useDispatch();
    const loading = useSelector(getIsLoading);
    const userEmail=useSelector(getUserEmail)
    const error = useSelector(getError);
    const items = useSelector(getContacts);
    
   
  
    useEffect(() => {
      
    dispatch(fetchContactsThunk())
    
  }, [dispatch]);

    return(<div
        style={{
          height: '100vh',
          display: 'block',
          minWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: 30,
          color: 'grey',
        }}
      >
        
        
        <ContactForm />
  
        <Title><TitleSpan>{userEmail}'s</TitleSpan> contacts</Title>
  
        <Filter />
        {loading && <Loader/>}
        {error && <Error/>}
        {items.length > 0 && !error && <ContactList />}
      </div>)
}
export default ContactPage;