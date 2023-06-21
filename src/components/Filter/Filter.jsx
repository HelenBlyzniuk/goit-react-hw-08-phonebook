import React from 'react';
import { useDispatch } from 'react-redux';
import { FilterContainer, FilterInput } from './Filter.styled';
import { filterSet } from 'components/redux/filterSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'components/redux/selectors';




export const Filter = () => {
  const dispatch=useDispatch();
  const filterState=useSelector(getFilter)

  const handleChange=(e)=>{
   const value=e.target.value
    dispatch(filterSet(value));
      
  }
  
  return (
    <FilterContainer>
      Find contact by name
      <FilterInput
        type="text"
        placeholder="...name"
        onChange={handleChange}
        value={filterState}
        
      />
    </FilterContainer>
  );
};


