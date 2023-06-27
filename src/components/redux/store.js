
import { configureStore } from "@reduxjs/toolkit";

 
  import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./authSlice";

  const persistConfig = {
    key: 'auth',
    storage,
    whitelist:['token','user']
  }

 const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer:{
 contacts:contactReducer,
 filters:filterReducer,
 auth:persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)



