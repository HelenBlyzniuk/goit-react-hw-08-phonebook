import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice=createSlice({
    name:'filter',
    initialState:initialState.filter,
    reducers:{
        filterSet(state,action){
            return action.payload;
           
        }
    }
})

export const filterReducer=filterSlice.reducer;
export const {filterSet}=filterSlice.actions;
