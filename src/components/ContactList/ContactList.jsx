
import { useDispatch } from 'react-redux';


import { useSelector } from 'react-redux';

import { ListContainer, ListItem, ListButton } from './ContactList.styled.jsx';
import { deleteContactThunk} from 'components/redux/thunks.js';
import { getContacts, getFilter } from 'components/redux/selectors.js';
import {  useState } from 'react';
import { ModalComponent } from 'components/Modal/Modal.jsx';

export function ContactList() {
  const filterState=useSelector(getFilter)
  const contacts =useSelector(getContacts)
  
  const [showModal,setShowModal]=useState(false);
  const [correctedContact,setCorrectedContact]=useState([])
  
 
  const normalizedFilter = filterState.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
 
  const dispatch=useDispatch();
  const handleClick = e => {
    dispatch(deleteContactThunk(e.currentTarget.id));
    
  };
  const handlePatchButtonClick=e=>{
    const id=e.currentTarget.id;
    const correctedContact=contacts.filter(contact=>contact.id===id)
    setShowModal(true);
    setCorrectedContact(correctedContact)
    console.log(correctedContact)
    // dispatch(patchContactThunk(e.currentTarget.id))
  }
  const handleModalClick = () => {
    setShowModal(false);
  };

 
  
  return (
    <ListContainer>
      List of contacts
      {visibleContacts.map(({ name, number, id }) => (
        <ListItem id={id} key={id}>
          {name}: {number}
          <ListButton
            type="button"
            className="deleteContact"
            id={id}
            onClick={handleClick}
          >
            Delete
          </ListButton>
          <ListButton
            type="button"
            className="patchContact"
            id={id}
            onClick={handlePatchButtonClick}
          >
           Correct
          </ListButton>
          {showModal&&<ModalComponent onModalClick={handleModalClick} contact={correctedContact}/>}
        </ListItem>
      ))}
    </ListContainer>
  );
}

