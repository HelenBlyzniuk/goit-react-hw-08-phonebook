
import { useDispatch } from 'react-redux';


import { useSelector } from 'react-redux';

import { ListContainer, ListItem, ListButton } from './ContactList.styled.jsx';
import { deleteContactThunk, patchContactThunk } from 'components/redux/thunks.js';
import { getContacts, getFilter } from 'components/redux/selectors.js';

export function ContactList() {
  const filterState=useSelector(getFilter)
  const contacts =useSelector(getContacts)
  
  
 
  const normalizedFilter = filterState.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
 
  const dispatch=useDispatch();
  const handleClick = e => {
    dispatch(deleteContactThunk(e.currentTarget.id));
    
  };
  const handlePatchClick=e=>{
    dispatch(patchContactThunk(e.currentTarget.id))
  }
 
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
            onClick={handlePatchClick}
          >
           Correct
          </ListButton>
        </ListItem>
      ))}
    </ListContainer>
  );
}

