import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <HashRouter>
  <App/>
  </HashRouter>, 
  document.getElementById("root")
  
  );