import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Set the basename to the repository name so client-side routes work
  // when the site is hosted at https://<user>.github.io/moviepicker/
  <BrowserRouter basename="/moviepicker">
    <App />
  </BrowserRouter>
);


