import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ImageProvider } from './context/ImageContext';
import { UserProvider } from './context/UserContext';
import './index.css';

// import { ImageProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ImageProvider>
        <App />
      </ImageProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
