import { combineReducers } from "redux";
import { authReducer } from "./authSlice";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


export const reducer=combineReducers({
    contacts: contactReducer,
    filters: filterReducer,
    auth:authReducer,
})