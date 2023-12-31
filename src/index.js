import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from './components/redux/store';
import { Provider } from "react-redux";
import {persistor} from './components/redux/store'

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
    <App />
    </Provider>
    </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
