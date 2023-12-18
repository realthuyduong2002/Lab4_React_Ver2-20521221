import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import component App

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>,
  document.getElementById('root') // Render into the HTML element with id "root"
);
