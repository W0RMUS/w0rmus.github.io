import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// @ts-expect-error - This is a valid call to ReactDOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
