import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//context provider 
import { AuthContextProvider } from './context/authContext';

ReactDOM.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
  ,
  document.getElementById('root')
);
